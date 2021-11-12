import { Injectable } from '@angular/core';
import { Sponsor, SponsorTier } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private sponsors: Sponsor[] = [
    {
      id: 1,
      name: 'Modus',
      logoUrl: 'assets/logos/ionic.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Platinum
    },
    {
      id: 2,
      name: 'OpenForge',
      logoUrl: 'assets/logos/ionic.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Platinum
    },
    {
      id: 3,
      name: 'auth0',
      logoUrl: 'assets/logos/ionic.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold
    },
    {
      id: 4,
      name: 'Nrwl',
      logoUrl: 'assets/logos/ionic.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Gold
    },
    {
      id: 5,
      name: 'CouchBase',
      logoUrl: 'assets/logos/ionic.png',
      accentColor: '#ed2226',
      tier: SponsorTier.Gold
    },
    {
      id: 6,
      name: 'LaunchPad Labs',
      logoUrl: 'assets/logos/ionic.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Gold
    },
    {
      id: 7,
      name: 'strapi',
      logoUrl: 'assets/logos/ionic.png',
      accentColor: '#8e75ff',
      tier: SponsorTier.Silver
    },
    {
      id: 8,
      name: 'Vue Mastery',
      logoUrl: 'assets/logos/ionic.png',
      accentColor: '#2c8097',
      tier: SponsorTier.Bronze
    }
  ];

  constructor() {}

  getSponsors(): Sponsor[] {
    return this.sponsors;
  }

  getSponsor(id: number): Sponsor | undefined {
    return this.sponsors.find(sponsor => sponsor.id === id);
  }
}
