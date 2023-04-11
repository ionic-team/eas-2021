import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AgendaItem, Company, Speaker, Sponsor } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public async getSpeakers(): Promise<Speaker[]>  {
    return await this.get('speakers.json');
  }

  public async getAgenda(): Promise<AgendaItem[]>  {
    return await this.get('agenda.json');
  }

  public async getSponsors(): Promise<Sponsor[]>  {
    return await this.get('sponsors.json');
  }

  public async getCompanies(): Promise<Company[]>  {
    return await this.get('companies.json');
  }

  private async get(url: string) {
    const response = await fetch(`${environment.baseUrl}/${url}`);
    return await response.json();
  }
}
