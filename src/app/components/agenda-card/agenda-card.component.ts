import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from '../../services/agenda.service';
import { SpeakerService } from '../../services/speaker.service';
import { CompanyService } from '../../services/company.service';
import { AgendaItem, Speaker, Company } from '../../types';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.scss'],
})
export class AgendaCardComponent implements OnInit {
  @Input() id: number;

  private agenda: AgendaItem;
  private speaker: Speaker;
  private company: Company;

  constructor(
    private agendaService: AgendaService,
    private speakerService: SpeakerService,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.agenda = this.agendaService.getAgendaItem(this.id);
    this.speaker = this.speakerService.getSpeaker(this.agenda.speakerId);
    this.company = this.companyService.getCompany(this.speaker.companyId);
  }

  navigateToAgendaItemPage() {
    this.router.navigate([`/agenda/${this.id}`]);
  }
}
