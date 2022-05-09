import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { VaultService } from './vault.service';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private vaultService: VaultService) { }
    async canActivate(): Promise<boolean> {
        if (!await this.authService.isAuthenticated()) {
            this.vaultService.clear();
            this.router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
}
