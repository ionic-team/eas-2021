import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AgendaItem, Company, Speaker, Sponsor } from '../types';
import { KeyValueStorage } from '@ionic-enterprise/secure-storage/ngx';
import { KeyService } from './key.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private initialized = false;

  constructor(private secureStorage: KeyValueStorage, private keyService: KeyService) {
  }

  public async getSpeakers(): Promise<Speaker[]> {
    return await this.getCached('speakers.json');
  }

  public async getAgenda(): Promise<AgendaItem[]> {
    return await this.getCached('agenda.json');
  }

  public async getSponsors(): Promise<Sponsor[]> {
    return await this.getCached('sponsors.json');
  }

  public async getCompanies(): Promise<Company[]> {
    return await this.getCached('companies.json');
  }

  private async getCached(url: string): Promise<any> {
    await this.initStorage();

    // Get from Secure Storage if available
    let data = await this.secureStorage.get(url);
    if (!data) {
      // Otherwise get from the server
      data = await this.get(url);

      // Store in Secure Storage
      this.secureStorage.set(url, data);
    }
    return data;
  }

  private async initStorage(): Promise<void> {
    if (this.initialized) {
      return;
    }
    
    this.initialized = true;
    const key = await this.keyService.getKey();
    await this.secureStorage.create(key);
  }

  private async get(url: string): Promise<any> {
    const response = await fetch(`${environment.baseUrl}/${url}`);
    return await response.json();
  }
}
