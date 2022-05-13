import { Injectable, NgZone } from '@angular/core';
import { IonicAuth } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';
import { nativeIonicAuthOptions, webIonicAuthOptions } from '../../environments/environment';
import { RouteService } from './route.service';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {
  public authenticated: boolean;

  constructor(
    private platform: Platform,
    private ngZone: NgZone,
    private routeService: RouteService,
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
    this.routeService.returnToLogin();
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
      this.authenticated = true;
      this.routeService.goToRoot();
  }

}
