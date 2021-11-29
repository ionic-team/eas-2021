import { Component } from '@angular/core';
import { AgendaItem } from '../../types';
import { AgendaService } from '../../services/agenda.service';
import { ModalController } from '@ionic/angular';
import { PermissionsModalComponent } from 'src/app/components/permissions-modal/permissions-modal.component';
import { Capacitor } from '@capacitor/core';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public agenda: AgendaItem[] = [];

  constructor(private agendaService: AgendaService,
    private modalController: ModalController,
    private pushNotificationService: PushNotificationService,
    private storageService: StorageService) {
    this.agenda = this.agendaService.getAgenda();
  }

  ngOnInit() {
    this.presentModal();
  }

  trackItems(index: number, itemObject: AgendaItem) {
    return itemObject.id;
  }

  async presentModal() {
    // Call register every time the app launches
    // Show permission prompt the first time app is launched
    if (Capacitor.getPlatform() !== 'web') {
      const permStatus = await this.pushNotificationService.checkPermissionStatus();

      if (permStatus === 'granted') {
        // On Android, permission is granted automatically
        await this.pushNotificationService.registerPush();
      }
      else if (permStatus === 'prompt' && !(await this.storageService.getPushNotesModalShown())) {
        // On iOS, ask the user for permission first. only once.
        await this.storageService.setPushNotesModalShown();
        
        const modal = await this.modalController.create({
          component: PermissionsModalComponent,
          initialBreakpoint: 1,
          breakpoints: [0, 1],
          cssClass: 'permissions-modal'
        });
        return await modal.present();
      }
    }
  }
}
