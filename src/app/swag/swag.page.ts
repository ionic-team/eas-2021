import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swag',
  templateUrl: './swag.page.html',
  styleUrls: ['./swag.page.scss'],
})
export class SwagPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript();
  }

  private loadScript() {
    let hubspotScript = document.createElement("script");
    hubspotScript.type = "text/javascript";
    hubspotScript.async = false;
    hubspotScript.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(hubspotScript);

    hubspotScript.onload = () => {
      this.createForm();
    }
  }

  public createForm() {
    (window as any).hbspt.forms.create({
      portalId: '3776657',
      formId: "75127e93-3da1-4368-b3a7-c680d53483ac",
      region: "na1",
      target: `#hubspot-form`,
      translations: {
        en: {
          submitText: "Submit ",
        },
      },
    });
  }
}
