import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-auth-transition',
  templateUrl: './auth-transition.page.html',
  styleUrls: ['./auth-transition.page.scss'],
})
export class AuthTransitionPage implements OnInit {

  constructor(private routeService: RouteService, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    try {
      // Transitioning to logout or login
      if (window.location.hash === '#logout') {
        this.routeService.returnToLogin();
      } else {
        await this.auth.handleLogin();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
