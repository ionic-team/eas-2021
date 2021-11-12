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

  public agenda: AgendaItem;
  public speakers: Speaker[];
  public company: Company;
  public photoUrls: string[] = [];

  constructor(
    private agendaService: AgendaService,
    private speakerService: SpeakerService,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.agenda = this.agendaService.getAgendaItem(this.id);
    this.speakers = this.speakerService.getSpeakers(this.agenda.speakerIds);
    this.company = this.companyService.getCompany(this.speakers[0].companyId);
    this.photoUrls = this.speakers.map(speaker => speaker.photoUrl);
  }

  navigateToAgendaItemPage() {
    this.router.navigate([`/agenda/${this.id}`]);
  }
}
