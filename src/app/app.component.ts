import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { AuthenticationService } from './services/authentication.service';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AuthenticationService, private router: Router, private platform: Platform, private ngZone: NgZone) {
    this.initializeApp();
    platform.resume.subscribe(() => {
      this.checkAuth();
    });
  }

  async initializeApp() {
    if (Capacitor.isNativePlatform()) {
      await StatusBar.hide();
      SplashScreen.hide();
    }

    this.checkAuth();
  }

  private routeToLogin() {
    this.ngZone.run(() => {
      this.router.navigate(['login']);
    });
  }

  private async checkAuth() {
    if (window.location.hash.length > 0) {
      // When Auth Connect returns to the app it will load the app again
      // We want it to load without checking authentication so that it can
      // capture the token when auth-transition is routed to.
      return;
    }
    try {
      // This will trigger a check of the vault and ensure we are authenticated
      const authenticated = await this.auth.isAuthenticated();
      if (!authenticated) {
        this.routeToLogin();
      }
    } catch (error) {
      if (error?.message?.includes('Not authenticated')) {
        this.auth.logout();
      } else {
        // Any failure we'll route to login
        this.routeToLogin();
      }
    }
  }
}
