import { Injectable } from '@angular/core';
import { Sponsor, SponsorTier } from '../types';

const LOREM_IPSUM = 'Details coming soon.';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private sponsors: Sponsor[] = [
    {
      id: 1,
      name: 'Modus',
      logoUrl: 'assets/logos/sponsor-modus.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM
    },
    {
      id: 2,
      name: 'OpenForge',
      logoUrl: 'assets/logos/sponsor-openforge.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM
    },
    {
      id: 3,
      name: 'auth0',
      logoUrl: 'assets/logos/sponsor-auth0.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM
    },
    {
      id: 4,
      name: 'Nrwl',
      logoUrl: 'assets/logos/sponsor-nrwl.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM
    },
    {
      id: 5,
      name: 'CouchBase',
      logoUrl: 'assets/logos/sponsor-couchbase.png',
      accentColor: '#ed2226',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM
    },
    {
      id: 6,
      name: 'LaunchPad Labs',
      logoUrl: 'assets/logos/sponsor-launchpad-lab.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM
    },
    {
      id: 7,
      name: 'strapi',
      logoUrl: 'assets/logos/sponsor-strapi.png',
      accentColor: '#8e75ff',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM
    },
    {
      id: 8,
      name: 'Vue Mastery',
      logoUrl: 'assets/logos/sponsor-vue-mastery.png',
      accentColor: '#2c8097',
      tier: SponsorTier.Bronze,
      biography: LOREM_IPSUM
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
