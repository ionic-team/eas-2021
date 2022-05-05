import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public authenticationChange$: Observable<boolean>;
  public busy = false;
  public authenticated: boolean;
  public showLogo = false;
  public isDark = !window.matchMedia('(prefers-color-scheme: dark)').matches;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationChange$ = authenticationService.authenticationChange$;
  }

  async ngOnInit() {

  }

  async signIn() {
    try {
      this.busy = true;
      await this.authenticationService.login();
    } finally {
      setTimeout(() => {
        // Timeout is used here because we may have logged in and are routing to the home page
        this.busy = false;
      }, 1000);

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
