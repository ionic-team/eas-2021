import { Component } from '@angular/core';
import { AgendaItem } from '../../types';
import { AgendaService } from '../../services/agenda.service';
import { PushNotificationService } from 'src/app/services/pn.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public agenda: AgendaItem[] = [];

  constructor(private agendaService: AgendaService, private pushService: PushNotificationService) {
    this.agenda = this.agendaService.getAgenda();
  }

  ngOnInit() {
    this.pushService.initPush();
  }

  trackItems(index: number, itemObject: AgendaItem) {
    return itemObject.id;
  }

}
