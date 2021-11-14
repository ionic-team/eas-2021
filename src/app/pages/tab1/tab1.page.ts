import { Component } from '@angular/core';
import { AgendaItem } from '../../types';
import { AgendaService } from '../../services/agenda.service';
import { ModalController } from '@ionic/angular';
import { PermissionsModalComponent } from 'src/app/components/permissions-modal/permissions-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public agenda: AgendaItem[] = [];

  constructor(private agendaService: AgendaService,
    private modalController: ModalController) {
    this.agenda = this.agendaService.getAgenda();
  }

  ngOnInit() {
    this.presentModal();
  }

  trackItems(index: number, itemObject: AgendaItem) {
    return itemObject.id;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PermissionsModalComponent,
      initialBreakpoint: 0.50,
      breakpoints: [0, 0.50, 1]
    });
    return await modal.present();
  }

}
