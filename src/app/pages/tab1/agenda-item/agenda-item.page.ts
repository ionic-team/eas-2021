import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from '../../../services/speaker.service';
import { AgendaService } from '../../../services/agenda.service';
import { CompanyService } from '../../../services/company.service';
import { AgendaItem, Company, Speaker } from '../../../types';

@Component({
  selector: 'app-agenda-item',
  templateUrl: './agenda-item.page.html',
  styleUrls: ['./agenda-item.page.scss'],
})
export class AgendaItemPage {
  private agendaItem: AgendaItem;
  private speaker: Speaker;
  private company: Company;

  constructor(
    private route: ActivatedRoute,
    private speakerService: SpeakerService,
    private agendaService: AgendaService,
    private companyService: CompanyService,
  ) {
    const agendaId = route.snapshot.paramMap.get('agendaId');
    this.agendaItem = agendaService.getAgendaItem(parseInt(agendaId, 10))
    this.speaker = speakerService.getSpeaker(this.agendaItem.speakerId);
    this.company = companyService.getCompany(this.speaker.companyId);
  }
}
