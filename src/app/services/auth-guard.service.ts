import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { RouteService } from './route.service';
import { VaultService } from './vault.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private authService: AuthenticationService,
        private routeService: RouteService,
        private vaultService: VaultService) { }
        
    async canActivate(): Promise<boolean> {
        if (!await this.authService.isAuthenticated()) {
            this.vaultService.clear();
            this.routeService.returnToLogin();
            return false;
        } else {
            return true;
        }
    }
}
