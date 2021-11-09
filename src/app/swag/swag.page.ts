import { Component, OnInit } from '@angular/core';
import { HubspotService } from '../services/hubspot.service';

@Component({
  selector: 'app-swag',
  templateUrl: './swag.page.html',
  styleUrls: ['./swag.page.scss'],
})
export class SwagPage implements OnInit {

  constructor(private hubspotService: HubspotService) { }

  ngOnInit() {
    
  }

  public async submit() {
    await this.hubspotService.submitToHubspot();
  }
}
