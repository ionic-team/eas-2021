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
        this.vault = Capacitor.getPlatform() === 'web' ? new BrowserVault(this.config) : new Vault(this.config);
        this.init();
    }

    public async clear() {
        try {
            await this.vault.clear();
            console.log('Vault was cleared');
        } catch (err) {
            console.error('vault.service.ts clear()', err);
        }
    }

    /**
     * This method is called before the very first sign in is done.
     * If the device does not have biometrics then switch the vault to Secure Storage
     * otherwise it will use the default configuration of a biometric vault.
     */
    public async configureFirstTime() {
        if (Capacitor.getPlatform() === 'web') {
            return;
        }

        if (!await this.hasBiometrics() && await this.vault.isEmpty()) {
            this.vault.updateConfig({
                ...this.config,
                type: VaultType.SecureStorage,
                deviceSecurityType: DeviceSecurityType.None
            });
        }
    }

    private async hasBiometrics(): Promise<boolean> {
        // For this app we only want to use biometrics if the device is capable of strong encryption
        return await Device.isBiometricsEnabled() &&
            (await Device.getBiometricStrengthLevel() === BiometricSecurityStrength.Strong);
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

        this.vault.onError((error: VaultError) => {
            console.log(error);
        });

        // If you would like the privacy screen set to true
        await Device.setHideScreenOnBackground(false);
    }
}
