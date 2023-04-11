import { Injectable } from '@angular/core';
import { AuthConnect, AuthResult, AzureProvider, ProviderOptions, TokenType } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';
import { nativeIonicAuthOptions, webIonicAuthOptions } from '../../environments/environment';
import { RouteService } from './route.service';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private provider: AzureProvider;
  private result: AuthResult | undefined;
  private options: ProviderOptions;

  constructor(
    private platform: Platform,
    private routeService: RouteService,
    private vaultService: VaultService) {
    this.options = this.platform.is('hybrid') ? nativeIonicAuthOptions : webIonicAuthOptions;
    this.provider = new AzureProvider();
    this.init();
  }

  public async init() {
    await AuthConnect.setup({
      platform: this.platform.is('hybrid') ? 'capacitor' : 'web',
      logLevel: 'DEBUG',
      ios: {
        webView: 'private',
        safariWebViewOptions: { dismissButtonStyle: 'close', preferredBarTintColor: '#FFFFFF', preferredControlTintColor: '#333333' }
      },
      android: { isAnimated: false, showDefaultShareMenuItem: false },
      web: { uiMode: 'current', authFlow: 'PKCE' }
    });
  }

  public async login() {
    this.result = await AuthConnect.login(this.provider, this.options);
    await this.vaultService.set(this.result);
    this.routeService.goToRoot();
  }

  // This is call for web and takes the auth info from query parameters and gives it to auth connect to handle
  // We then store the token and redirect to the main page
  public async handleLogin() {
    const urlParams = new URLSearchParams(window.location.search);
    this.result = await AuthConnect.handleLoginCallback({ code: urlParams.get('code')!, state: urlParams.get('state')! });
    await this.vaultService.set(this.result);
    this.routeService.goToRoot();
  }

  public async logout(): Promise<void> {
    if (!this.provider) {
      console.error(`provider is empty`);
    }
    if (!this.result) {
      console.error(`authResult is empty`);
    }
    try {
      await AuthConnect.logout(this.provider, this.result!);
    } catch (error) {
      console.error('AuthConnect.logout', error);
    }
    this.routeService.returnToLogin();
  }

  public async getAccessToken(): Promise<string | undefined> {
    return await AuthConnect.getToken(TokenType.access, this.result!);
  }

  public decodeToken() {
    return AuthConnect.decodeToken(TokenType.access, this.result!);
  }

  public async isAuthenticated(): Promise<boolean> {
    try {
      const authResult = await this.vaultService.get();
      if (!authResult) {
        return false;
      }
      const { idToken } = authResult;
      if (!idToken) {
        throw new Error('No ID Token');
      }

      const expired = await AuthConnect.isAccessTokenExpired(authResult);
      if (!expired) {
        return true;
      }

      const newAuthResult = await AuthConnect.refreshSession(this.provider, authResult);
      await this.vaultService.set(newAuthResult);
      return true;
    } catch (e) {
      console.error(e);
      await this.vaultService.remove();
      return false;
    }
  }

}
