import { Component, Input, OnInit } from '@angular/core';
import { Sponsor, SponsorTier } from '../../types';
import { SponsorService } from '../../services/sponsor.service';

@Component({
  selector: 'app-sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss'],
})
export class SponsorCardComponent implements OnInit {
  @Input() id: number;

  public sponsor: Sponsor;

  constructor(
    private sponsorService: SponsorService
  ) { }

  ngOnInit() {
    this.sponsor = this.sponsorService.getSponsor(this.id);
  }

}
