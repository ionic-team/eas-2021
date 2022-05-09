import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { VaultService } from './services/vault.service';

const appInitFactory =
  (vaultService: VaultService): (() => Promise<void>) =>
  async () =>
    await vaultService.init();

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: APP_INITIALIZER, useFactory: appInitFactory, deps: [VaultService], multi: true },
        AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
