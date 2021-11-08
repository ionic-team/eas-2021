import { Component, OnInit, Input } from '@angular/core';
import { SpeakerService } from '../../services/speaker.service';
import { Speaker } from '../../types';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.scss'],
})
export class AgendaCardComponent implements OnInit {
  @Input() title: string;
  @Input() speakerId: number;
  @Input() startTime: string;
  @Input() endTime: string;

  private speaker: Speaker;

  constructor(private speakers: SpeakerService) {}

  ngOnInit() {
    this.speaker = this.speakers.getSpeaker(this.speakerId);
    console.log(this.speaker)
  }

}
