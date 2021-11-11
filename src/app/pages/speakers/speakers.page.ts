import { Component } from '@angular/core';
import { SpeakerService } from '../../services/speaker.service';
import { Speaker } from '../../types';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage {
  public speakers: Speaker[] = [];

  constructor(
    private speakerService: SpeakerService
  ) {
    this.speakers = speakerService.getSpeakers();
  }

  trackItems(index: number, itemObject: Speaker) {
    return itemObject.id;
  }
}
