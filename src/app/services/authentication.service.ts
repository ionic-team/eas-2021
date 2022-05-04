import { Injectable, NgZone } from '@angular/core';
import { IonicAuth } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { nativeIonicAuthOptions, webIonicAuthOptions } from '../../environments/environment';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {
  public authenticationChange$: Observable<boolean>;
  public authenticated: boolean;
  private authenticationChange: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(platform: Platform, private ngZone: NgZone, private vaultService: VaultService) {
    super(platform.is('hybrid')
      ? { ...nativeIonicAuthOptions, tokenStorageProvider: vaultService.vault }
      : { ...webIonicAuthOptions }
    );
    this.authenticationChange$ = this.authenticationChange.asObservable();
  }

  public async onLoginSuccess(): Promise<void> {
    try {
      console.log('onLoginSuccess');
      this.onAuthChange(true);
    } catch (err) {
      console.error(err);
    }
  }

  // Called as part of CURRENT implicit login flow only
  async handleLogin(url: string) {
    try {
      console.log('handle login Callback', url);
      await super.handleLoginCallback(url);

    } catch (err) {
      console.error('handleLoginCallback', err);
    }
  }

  public async onLogout(): Promise<void> {
    this.onAuthChange(false);
  }

  private async onAuthChange(isAuthenticated: boolean): Promise<void> {
    this.authenticated = isAuthenticated;
    this.ngZone.run(() => {
      this.authenticationChange.next(isAuthenticated);
    });
  }
}
