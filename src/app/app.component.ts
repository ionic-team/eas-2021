import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { AuthenticationService } from './services/authentication.service';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AuthenticationService, private router: Router) {
    this.initializeApp();
  }

  async initializeApp() {
    if (Capacitor.isNativePlatform()) {
      /* To make sure we provide the fastest app loading experience
          for our users, hide the splash screen automatically
          when the app is ready to be used

          https://capacitorjs.com/docs/apis/splash-screen#hiding-the-splash-screen
      */
      SplashScreen.hide();
    }

    this.auth.authenticationChange$.pipe(distinct()).subscribe(async (isAuthenticated) => {
      console.log('isAuthenticated', isAuthenticated);
      if (isAuthenticated) {
        console.log('route to blank');
        this.router.navigateByUrl('/');
      } else {
        try {
          await this.auth.clearStorage();
        } catch (err) {
          console.log(err);
        }
      }
    });
  }
}
