import { Component } from '@angular/core';
import { PushNotificationService } from '../services/pn.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private pushNoteService: PushNotificationService) {}

  ngOnInit() {
    this.pushNoteService.setup();
  }

}
