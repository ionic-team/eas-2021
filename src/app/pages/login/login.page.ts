import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { VaultService } from 'src/app/services/vault.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public busy = false;
  public showLogo = false;
  public isDark = !window.matchMedia('(prefers-color-scheme: dark)').matches;

  constructor(private authenticationService: AuthenticationService, private vaultService: VaultService) {
  }

  async ngOnInit() {

  }

  async signIn() {
    try {
      this.busy = true;
      await this.authenticationService.login();
      setTimeout(() => {
        // Timeout is used here because we may have logged in and are routing to the home page
        this.busy = false;
      }, 1000);
    } catch (error) {
      this.busy = false;
      console.error('signIn', error);
    }
  }

  async signOut() {
    try {
      this.busy = true;
      await this.authenticationService.logout();
    } catch (err) {
      console.error(err);
    } finally {
      this.busy = false;
    }
  }
}
