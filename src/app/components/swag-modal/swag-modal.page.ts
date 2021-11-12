import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HubspotService } from '../../services/hubspot.service';
import { HubspotFormData } from '../../types';

@Component({
  selector: 'app-swag-modal',
  templateUrl: './swag-modal.page.html',
  styleUrls: ['./swag-modal.page.scss'],
})
export class SwagModalPage implements OnInit {

  constructor(private hubspotService: HubspotService, private modalController: ModalController) { }

  public hubspotData: HubspotFormData = new HubspotFormData();

  ngOnInit() { }

  
  public async submitForm() {
    const success = await this.hubspotService.submitToHubspot(this.hubspotData);

    if (success) {
      await this.modalController.dismiss(success);  
    }
  }

  async closeModal() {
    await this.modalController.dismiss(null);
  }

}
