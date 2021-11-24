import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-permissions-modal',
  templateUrl: './permissions-modal.component.html',
  styleUrls: ['./permissions-modal.component.scss'],
})
export class PermissionsModalComponent implements OnInit {

  constructor(private modalController: ModalController, private pushService: PushNotificationService,
    private storageService: StorageService) { }

  ngOnInit() {}

  async onContinue() {
    await this.pushService.promptPushRegistration();
    await this.storageService.setPushNotesModalShown();
    this.closeModal();
  }

  async closeModal() {
    await this.storageService.setPushNotesModalShown();
    await this.modalController.dismiss(null);
  }
}
