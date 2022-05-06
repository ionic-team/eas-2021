import { Component } from '@angular/core';
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
  constructor(private auth: AuthenticationService, private router: Router, private platform: Platform) {
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

  private async checkAuth() {
    try {
      // This will trigger a check of the vault and ensure we are authenticated
      const authenticated = await this.auth.isAuthenticated();
      if (!authenticated) {
        this.router.navigate(['login']);
      }
    } catch (error) {
      console.error('error', JSON.stringify(error));
      if (error?.contains('Not authenticated')) {
        this.auth.logout();
      } else {
        // Any failure we'll route to login
        this.router.navigate(['login']);
      }
    }
  }
}
