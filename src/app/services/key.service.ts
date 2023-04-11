import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { BrowserVault, DeviceSecurityType, IdentityVaultConfig, Vault, VaultType } from '@ionic-enterprise/identity-vault';

@Injectable({
  providedIn: 'root'
})
export class KeyService {
  vault: Vault | BrowserVault;

  private config: IdentityVaultConfig = {
    key: 'io.ionic.conferences.cs.key',
    type: VaultType.SecureStorage,
    deviceSecurityType: DeviceSecurityType.None
  };
  constructor() {
  }

  public async init(): Promise<void> {
    if (Capacitor.getPlatform() === 'web') {
      this.vault = new BrowserVault(this.config);
    } else {
      this.vault = new Vault(this.config);
    }
  }

  public async getKey(): Promise<string> {
    let key = await this.vault.getValue('key');
    if (!key) {
      key = this.getUniqueId();
      await this.vault.setValue('key', key);
      return key;
    } else {
      return key;
    }
  }

  private getUniqueId(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
