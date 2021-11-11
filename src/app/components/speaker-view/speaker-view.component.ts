import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speaker-view',
  templateUrl: './speaker-view.component.html',
  styleUrls: ['./speaker-view.component.scss'],
})
export class SpeakerViewComponent implements OnInit {
  @Input() id: number;

  constructor() { }

  ngOnInit() {}

}
