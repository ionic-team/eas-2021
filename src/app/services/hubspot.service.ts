import { Injectable } from '@angular/core';
import { HubspotFormData } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HubspotService  {

  FORM_SUBMIT_URL = "https://api.hsforms.com/submissions/v3/integration/submit/3776657/75127e93-3da1-4368-b3a7-c680d53483ac";
  
  public async submitToHubspot(data: HubspotFormData) {
    console.log(data);
    
    const data2 = {
      "fields": [
        {
          "name": "firstname",
          "value": "Matteo2"
        },
        {
          "name": "lastname",
          "value": "Guapo2"
        },
        {
          "name": "email",
          "value": "matteo@guapo.com"
        },
        {
          "name": "address",
          "value": "555 Fake St."
        },
        {
          "name": "city",
          "value": "Madison"
        },
        {
          "name": "zip",
          "value": "53711"
        },
        {
          "name": "country_pl_",
          "value": "United States"
        },
        {
          "name": "state",
          "value": "Alaska"
        },
        {
          "name": "t_shirt_size",
          "value": "Large"
        }
      ]
    };

    // const response = await fetch(this.FORM_SUBMIT_URL, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(data2)
    //   });

    //return response.ok;
    return true;
  }
}
