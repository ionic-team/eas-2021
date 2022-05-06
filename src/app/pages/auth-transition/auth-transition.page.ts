import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-auth-transition',
  templateUrl: './auth-transition.page.html',
  styleUrls: ['./auth-transition.page.scss'],
})
export class AuthTransitionPage implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    try {
      // Transitioning to logout or login
      if (window.location.hash === '#logout') {
        this.router.navigate(['login']);
      } else {
        await this.auth.handleLogin();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
