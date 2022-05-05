import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SwagModalPage } from '../../components/swag-modal/swag-modal.page';


@Component({
  selector: 'app-swag',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public modalController: ModalController,
    private auth: AuthenticationService,
    private routerOutlet: IonRouterOutlet, public toastController: ToastController) { }

  async ngOnInit() {
  }

  async ionViewDidEnter() {
   const token = await this.auth.getAccessToken();
   console.log(this.auth.decodeToken(token));
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
    await this.auth.logout();
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
