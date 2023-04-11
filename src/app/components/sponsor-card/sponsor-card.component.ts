import { Component, Input, OnInit } from '@angular/core';
import { Sponsor } from '../../types';
import { SponsorService } from '../../services/sponsor.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss'],
})
export class SponsorCardComponent implements OnInit {
  @Input() id: number;
  @Input() button = false;

  public sponsor: Sponsor;

  constructor(
    private sponsorService: SponsorService
  ) { }

  async ngOnInit() {
    this.sponsor = await this.sponsorService.getSponsor(this.id);
  }

  async openLink(link: string) {
    await Browser.open({ url: link});
  }

}
