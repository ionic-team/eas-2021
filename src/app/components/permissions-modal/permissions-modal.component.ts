import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PushNotificationService } from 'src/app/services/pn.service';

@Component({
  selector: 'app-permissions-modal',
  templateUrl: './permissions-modal.component.html',
  styleUrls: ['./permissions-modal.component.scss'],
})
export class PermissionsModalComponent implements OnInit {

  constructor(private modalController: ModalController, private pushService: PushNotificationService) { }

  ngOnInit() {}

  async onContinue() {
    await this.pushService.initPush();
    this.closeModal();
  }

  async closeModal() {
    await this.modalController.dismiss(null);
  }
}
