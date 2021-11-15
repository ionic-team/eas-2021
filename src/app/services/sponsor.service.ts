import { Injectable } from '@angular/core';
import { Sponsor, SponsorTier } from '../types';

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque accumsan lacus, vel rhoncus quam. Maecenas metus tellus, convallis sed convallis eu, bibendum vulputate nisl. Vivamus et odio sit amet ex porttitor tempor et eget nunc. Suspendisse nibh augue, vestibulum in nibh et, rutrum vulputate est. Aenean eu bibendum libero. Morbi non dapibus mauris, eget ultricies purus. Nam malesuada, dui ac pretium sodales, purus sem aliquet orci, non venenatis turpis tortor sit amet arcu. Nulla facilisis, orci a fermentum facilisis, ipsum ligula faucibus ligula, vel bibendum turpis dolor eget nunc.';


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
