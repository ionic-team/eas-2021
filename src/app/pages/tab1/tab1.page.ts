import { Component } from '@angular/core';
import { AgendaItem } from '../../types';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public agenda: AgendaItem[] = [];

  constructor(private agendaService: AgendaService) {
    this.agenda = this.agendaService.getAgenda();
  }

  trackItems(index: number, itemObject: AgendaItem) {
    return itemObject.id;
  }

}
