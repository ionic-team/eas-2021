import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
    BiometricSecurityStrength,
    BrowserVault, Device, DeviceSecurityType,
    IdentityVaultConfig, Vault, VaultError, VaultType
} from '@ionic-enterprise/identity-vault';

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

    constructor() {
    }

    public async init() {
        if (Capacitor.getPlatform() === 'web') {
            this.vault = new BrowserVault(this.config);
        } else {
            if (!await this.hasBiometrics()) {
                this.config = {
                    ...this.config,
                    key: 'io.ionic.conferences.cs.auth.alternate',
                    type: VaultType.SecureStorage,
                    deviceSecurityType: DeviceSecurityType.None
                };
            }
            this.vault = new Vault(this.config);
        }

        this.vault.onConfigChanged(() => {
            console.log('Vault configuration was changed', this.config);
        });

        this.vault.onLock(() => {
            console.log('Vault was locked');
        });

        this.vault.onUnlock(() => {
            console.log('Vault was unlocked');
        });

        this.vault.onError((error: VaultError) => {
            console.error('this.vault.onError', error);
        });

        // If you would like the privacy screen set to true
        await Device.setHideScreenOnBackground(false);
    }

    public async clear() {
        await this.vault.clear();
    }

    public async set(key: string, value: any) {
        await this.vault.setValue(key, value);
    }

    public async get(key: string): Promise<any> {
        return await this.vault.getValue(key);
    }

    private async hasBiometrics(): Promise<boolean> {
        // For this app we only want to use biometrics if the device is capable of strong encryption
        return await Device.isBiometricsEnabled() &&
            (await Device.getBiometricStrengthLevel() === BiometricSecurityStrength.Strong);
    }
}
