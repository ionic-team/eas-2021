import { Injectable } from '@angular/core';
import { Sponsor, SponsorTier } from '../types';
import { ApiService } from './api.service';

const LOREM_IPSUM = 'Details coming soon.';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private sponsors: Sponsor[];

  constructor(private apiService: ApiService) {}
  
  async getSponsors(): Promise<Sponsor[]> {
    await this.init();
    return this.sponsors;
  }

  async getSponsor(id: number): Promise<Sponsor | undefined> {
    await this.init();
    return this.sponsors.find(sponsor => sponsor.id === id);
  }

  private async init(): Promise<void> {
    if (this.sponsors) return;
    this.sponsors = await this.apiService.getSponsors();    
  }
}
