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
      biography: LOREM_IPSUM,
      homepage: 'https://moduscreate.com/'
    },
    {
      id: 2,
      name: 'OpenForge',
      logoUrl: 'assets/logos/sponsor-openforge.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: 'https://openforge.io/'
    },
    {
      id: 3,
      name: 'auth0',
      logoUrl: 'assets/logos/sponsor-auth0.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: 'https://auth0.com/'
    },
    {
      id: 4,
      name: 'Nrwl',
      logoUrl: 'assets/logos/sponsor-nrwl.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: 'https://nrwl.io/'
    },
    {
      id: 5,
      name: 'CouchBase',
      logoUrl: 'assets/logos/sponsor-couchbase.png',
      accentColor: '#ed2226',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: 'https://couchbase.com/'
    },
    {
      id: 6,
      name: 'LaunchPad Lab',
      logoUrl: 'assets/logos/sponsor-launchpad-lab.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: 'https://launchpadlab.com/'
    },
    {
      id: 7,
      name: 'strapi',
      logoUrl: 'assets/logos/sponsor-strapi.png',
      accentColor: '#8e75ff',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: 'https://strapi.io/'
    },
    {
      id: 8,
      name: 'Vue Mastery',
      logoUrl: 'assets/logos/sponsor-vue-mastery.png',
      accentColor: '#2c8097',
      tier: SponsorTier.Bronze,
      biography: LOREM_IPSUM,
      homepage: 'https://vuemastery.com/'
    },
    {
      id: 9,
      name: 'Briebug',
      logoUrl: 'assets/logos/sponsor-briebug.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: 'https://briebug.com/'
    },
    {
      id: 10,
      name: 'jnesis',
      logoUrl: 'assets/logos/sponsor-jnesis.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: 'https://jnesis.com/'
    },
    {
      id: 11,
      name: 'Hybrid Mob',
      logoUrl: 'assets/logos/sponsor-hybridmob.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: 'https://hybridmob.com/'
    },
    {
      id: 12,
      name: 'beNovelty',
      logoUrl: 'assets/logos/sponsor-benoveltylimited.png',
      accentColor: '#ffffff',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: 'https://benovelty.com/'
    },
  ];

  constructor() {}

  getSponsors(): Sponsor[] {
    return this.sponsors;
  }

  getSponsor(id: number): Sponsor | undefined {
    return this.sponsors.find(sponsor => sponsor.id === id);
  }
}
