import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakerService } from '../../services/speaker.service';
import { Speaker } from '../../types';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.scss'],
})
export class AgendaCardComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() speakerId: number;
  @Input() startTime: string;
  @Input() endTime: string;

  private speaker: Speaker;

  constructor(
    private speakers: SpeakerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.speaker = this.speakers.getSpeaker(this.speakerId);
  }

  navigateToAgendaItemPage() {
    this.router.navigate([`/agenda/${this.id}`]);
  }

}
