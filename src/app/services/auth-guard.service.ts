import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public authService: AuthenticationService, public router: Router) { }
    async canActivate(): Promise<boolean> {
        if (!await this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
}
