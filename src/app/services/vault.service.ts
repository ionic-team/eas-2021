import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
    BiometricSecurityStrength,
    BrowserVault, Device, DeviceSecurityType,
    IdentityVaultConfig, Vault, VaultError, VaultErrorCodes, VaultType
} from '@ionic-enterprise/identity-vault';
import { RouteService } from './route.service';
import { AuthResult } from '@ionic-enterprise/auth';

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

    constructor(private routeService: RouteService) {
    }

    /**
     * Init is called by our APP_INITIALIZER at the startup of the application
     */
    public async init() {
        if (Capacitor.getPlatform() === 'web') {
            this.vault = new BrowserVault(this.config);
        } else {
            // If the device doesnt have biometrics the we'll use a Secure Storage Vault
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
            if (error.code === VaultErrorCodes.UserCanceledInteraction) {
                this.routeService.returnToLogin();
            }
        });

        // If you would like the privacy screen set to true
        await Device.setHideScreenOnBackground(true);
    }

    public async clear() {
        await this.vault.clear();
    }

    public async set(value: AuthResult) {
        await this.vault.setValue('auth', JSON.stringify(value));
    }

    public async get(): Promise<AuthResult | undefined> {
        const value = await this.vault.getValue('auth');
        if (value == null) return undefined;
        return JSON.parse(value);
    }

    public async remove(): Promise<void> {
        return await this.vault.removeValue('auth');
    }

    private async hasBiometrics(): Promise<boolean> {
        // For this app we only want to use biometrics if the device is capable of strong encryption
        return await Device.isBiometricsEnabled() &&
            (await Device.getBiometricStrengthLevel() === BiometricSecurityStrength.Strong);
    }
}
