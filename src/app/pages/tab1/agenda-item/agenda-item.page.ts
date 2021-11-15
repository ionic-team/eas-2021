import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from '../../../services/speaker.service';
import { AgendaService } from '../../../services/agenda.service';
import { CompanyService } from '../../../services/company.service';
import { AgendaItem, Company, Speaker } from '../../../types';
import { TalkReminderService } from 'src/app/services/talk-reminder.service';

@Component({
  selector: 'app-agenda-item',
  templateUrl: './agenda-item.page.html',
  styleUrls: ['./agenda-item.page.scss'],
})
export class AgendaItemPage {
  public agendaItem: AgendaItem;
  public speakers: Speaker[];
  public company: Company;
  public photoUrls: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private speakerService: SpeakerService,
    private agendaService: AgendaService,
    private companyService: CompanyService,
    private talkReminderService: TalkReminderService
  ) {
    const agendaId = route.snapshot.paramMap.get('agendaId');
    this.agendaItem = agendaService.getAgendaItem(parseInt(agendaId, 10))
    this.speakers = speakerService.getSpeakers(this.agendaItem.speakerIds);
    this.company = companyService.getCompany(this.speakers[0].companyId);
    this.photoUrls = this.speakers.map(speaker => speaker.photoUrl);
  }

  async setReminder() {
    await this.talkReminderService.scheduleReminder();
  }
}
