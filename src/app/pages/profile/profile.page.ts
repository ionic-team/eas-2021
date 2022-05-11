import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { VaultService } from 'src/app/services/vault.service';
import { SwagModalPage } from '../../components/swag-modal/swag-modal.page';


@Component({
  selector: 'app-swag',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public modalController: ModalController,
    private authService: AuthenticationService,
    private vaultService: VaultService,
    private routerOutlet: IonRouterOutlet, public toastController: ToastController) { }

  async ngOnInit() {
  }

  async ionViewDidEnter() {
    const token = await this.authService.getAccessToken();
    console.log(this.authService.decodeToken(token));
  }

  async openSwagModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: SwagModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {}
    });

    modal.onDidDismiss().then((result) => {
      // Data will be undefined if modal was swiped closed or back button used
      if (result.data) {
        this.presentToast();
      }
    });

    return await modal.present();
  }

  public async signOut() {
    await this.authService.clearStorage();
    await this.vaultService.clear();

    // Note: Logout will cause the app to reload so we cannot await logout!
    this.authService.logout();
  }

  private async presentToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Thanks! Winners will be notified by email.',
      duration: 2000,
      color: 'primary'
    });

    await toast.present();
  }
}
