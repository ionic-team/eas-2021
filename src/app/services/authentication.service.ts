import { Injectable, NgZone } from '@angular/core';
import { IonicAuth } from '@ionic-enterprise/auth';
import { NavController, Platform } from '@ionic/angular';
import { nativeIonicAuthOptions, webIonicAuthOptions } from '../../environments/environment';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {
  public authenticated: boolean;

  constructor(
    private platform: Platform,
    private ngZone: NgZone,
    private navController: NavController,
    private vaultService: VaultService) {
    super(platform.is('hybrid')
      ? { ...nativeIonicAuthOptions, tokenStorageProvider: vaultService.vault }
      : { ...webIonicAuthOptions, tokenStorageProvider: vaultService.vault }
    );
  }

  // Called as part of CURRENT implicit login flow only
  public async handleLogin() {
    await super.handleLoginCallback();
  }

  public async onLogout(): Promise<void> {
    this.navController.navigateRoot('login', { animated: false });
    this.ngZone.run(() => {
      this.authenticated = false;
    });
  }

  /**
   * This code will decode a JWT token and return the JSON payload
   * You can use this get access to claims such as the users name
   * or profile image (depending on the OIDC provider)
   *
   * @param token
   */
  public decodeToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      const v = ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      return `%${v}`;
    }).join(''));

    return JSON.parse(jsonPayload);
  };


  async onLoginSuccess(): Promise<void> {
    // As authenticated could be bound to a view we would want the view to change
    // when the variable changes, so its wrapped with ngZone.run
    this.ngZone.run(() => {
      this.authenticated = true;

      // I've chosen to navigate to the root of the app without animation
      // as the login window already animated out
      this.navController.navigateRoot('/', { animated: false });
    });
  }

}
