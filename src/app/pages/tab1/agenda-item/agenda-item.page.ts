import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from '../../../services/speaker.service';
import { AgendaService } from '../../../services/agenda.service';
import { AgendaItem, Speaker } from '../../../types';

@Component({
  selector: 'app-agenda-item',
  templateUrl: './agenda-item.page.html',
  styleUrls: ['./agenda-item.page.scss'],
})
export class AgendaItemPage {
private agendaItem: AgendaItem;
private speaker: Speaker;

constructor(
  private route: ActivatedRoute,
  private speakers: SpeakerService,
  private agenda: AgendaService
) {
  const agendaId = route.snapshot.paramMap.get('agendaId');
  this.agendaItem = agenda.getAgendaItem(parseInt(agendaId, 10))
  this.speaker = speakers.getSpeaker(this.agendaItem.speakerId);
}
}
