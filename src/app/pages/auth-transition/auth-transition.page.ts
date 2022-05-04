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
    console.log('Entering auto-transition');

    const params = new URLSearchParams(window.location.hash.substr(1));
    console.log(window.location.search);
    console.log('token', params.get('access_token'));

    await this.auth.callback(window.location.href);


    const auth = await this.auth.isAuthenticated();
    console.log('transitioned to auth=' + auth);
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 5000);
  }

}
