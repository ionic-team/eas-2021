import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
    BrowserVault, Device, DeviceSecurityType,
    IdentityVaultConfig, Vault, VaultType
} from '@ionic-enterprise/identity-vault';
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class VaultService {

    config: IdentityVaultConfig = {
        key: 'io.ionic.conferences.cs.auth',
        type: VaultType.DeviceSecurity,
        deviceSecurityType: DeviceSecurityType.Biometrics,
        lockAfterBackgrounded: 2000,
        shouldClearVaultAfterTooManyFailedAttempts: false,
        customPasscodeInvalidUnlockAttempts: 10,
        unlockVaultOnLoad: false,
    };

    vault: Vault | BrowserVault;

    constructor(private platform: Platform) {
        this.vault = Capacitor.getPlatform() === 'web' ? new BrowserVault(this.config) : new Vault(this.config);
        this.init();
    }

    public async lock() {
        try {
            await this.vault.lock();
        } catch (err) {
            console.error('vault.service.ts lock()', err);
        }
    }

    public async unlock() {
        try {
            await this.vault.unlock();
        } catch (err) {
            const msg = (typeof err == 'object') ? JSON.stringify(err) : err;
            console.error('vault.service.ts unlock()', msg);
        }
    }

    public async clear() {
        try {
            await this.vault.clear();
            console.log('Vault was cleared');
        } catch (err) {
            console.error('vault.service.ts clear()', err);
        }
    }

    public async hasBiometrics(): Promise<boolean> {
        return await Device.isBiometricsEnabled();
    }

    private async init() {
        this.vault.onConfigChanged(() => {
            console.log('Vault configuration was changed', this.config);
        });
        this.vault.onLock(() => {
            console.log('Vault was locked');
        });
        this.vault.onUnlock(() => {
            console.log('Vault was unlocked');
        });
        this.vault.onError((err) => {
            console.error('Vault error', err);
            alert(err.code + ': ' + err.message);
        });
        await Device.setHideScreenOnBackground(true);
    }
}
