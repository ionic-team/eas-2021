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
      this.busy = false;
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
