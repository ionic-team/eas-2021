import { Injectable } from '@angular/core';
import { TokenStorageProvider } from '@ionic-enterprise/auth';
import { VaultService } from './vault.service';

@Injectable({
    providedIn: 'root'
})
export class TokenProviderService implements TokenStorageProvider {
    constructor(private vaultService: VaultService) {
    }

    async getAccessToken(tokenName?: string): Promise<string> {
        console.log('tokenProviderService.getAccessToken');
        return await this.vaultService.get(`accessToken.${tokenName}`);
    }

    async setAccessToken(accessToken: string, tokenName?: string): Promise<void> {
        await this.vaultService.set(`accessToken.${tokenName}`, accessToken);
    }

    async getRefreshToken(): Promise<string | undefined> {
        console.log('tokenProviderService.getRefreshToken');
        return await this.vaultService.get(`refreshToken`);
    }

    async setRefreshToken(refreshToken: string): Promise<void> {
        await this.vaultService.set(`refreshToken`, refreshToken);
    }

    async getIdToken(): Promise<string> {
        console.log('tokenProviderService.getIdToken');
        return await this.vaultService.get('idToken');
    }

    async setIdToken(idToken: string): Promise<void> {
        await this.vaultService.set('idToken', idToken);
    }

    async getAuthResponse(): Promise<any> {
        return await this.vaultService.get('authResponse');
    }

    async setAuthResponse(response: any): Promise<void> {
        await this.vaultService.set('authResponse', response);
    }

    async clear(): Promise<void> {
        await this.vaultService.clear();
    }

    onLock(callback: () => void): void {
    }
}
