import { Component } from '@angular/core';
import { AgendaItem } from '../../types';
import { AgendaService } from '../../services/agenda.service';
import { ModalController } from '@ionic/angular';
import { PermissionsModalComponent } from 'src/app/components/permissions-modal/permissions-modal.component';
import { Capacitor } from '@capacitor/core';
import { StorageService } from 'src/app/services/storage.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public agenda: AgendaItem[] = [];

  constructor(private agendaService: AgendaService,
    private modalController: ModalController,
    private storageService: StorageService,
    private pushNotificationService: PushNotificationService) {
    this.agenda = this.agendaService.getAgenda();
  }

  ngOnInit() {
    this.presentModal();
  }

  trackItems(index: number, itemObject: AgendaItem) {
    return itemObject.id;
  }

  async presentModal() {
    if (Capacitor.getPlatform() !== 'web') {
      const permStatus = await this.pushNotificationService.checkPermissionStatus();
      if (permStatus === 'granted') {
        await this.pushNotificationService.registerPush();
      }
      else if (permStatus === 'prompt') {
        const modal = await this.modalController.create({
          component: PermissionsModalComponent,
          initialBreakpoint: 1,
          breakpoints: [0, 1],
          cssClass: 'permissions-modal'
        });
        return await modal.present();
      }
    }

    // only display permissions modal if on mobile, and only show it once
    //if (Capacitor.getPlatform() !== 'web' && !(await this.storageService.getPushNotesModalShown())) {
  //   if (Capacitor.getPlatform() !== 'web') {
  //     const modal = await this.modalController.create({
  //       component: PermissionsModalComponent,
  //       initialBreakpoint: 1,
  //       breakpoints: [0, 1],
  //       cssClass: 'permissions-modal'
  //     });
  //     return await modal.present();
  //  }
  }
}
