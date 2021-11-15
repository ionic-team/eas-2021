import { Component } from '@angular/core';
import { AgendaItem } from '../../types';
import { AgendaService } from '../../services/agenda.service';
import { ModalController } from '@ionic/angular';
import { PermissionsModalComponent } from 'src/app/components/permissions-modal/permissions-modal.component';
import { Capacitor } from '@capacitor/core';
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
    // only display permissions modal if on mobile, and only show it once
    if (Capacitor.getPlatform() !== 'web' && !(await this.storageService.getPushNotesModalShown())) {
      const modal = await this.modalController.create({
        component: PermissionsModalComponent,
        initialBreakpoint: 0.40,
        breakpoints: [0, 0.40, 1]
      });
      return await modal.present();
    }
  }
}
