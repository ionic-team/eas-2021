import { Component, OnInit } from '@angular/core';
import { SpeakerService } from '../../services/speaker.service';
import { Speaker } from '../../types';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {
  public speakers: Speaker[] = [];

  constructor(private speakerService: SpeakerService) { }

  async ngOnInit() {
    this.speakers = await this.speakerService.getSpeakers();
  }

  trackItems(index: number, itemObject: Speaker) {
    return itemObject.id;
  }
}
