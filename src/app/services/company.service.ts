import { Injectable } from '@angular/core';
import { Company } from '../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies: Company[];
  constructor(private apiService: ApiService) {
  }

  public async getCompanies(): Promise<Company[]> {
    await this.init();
    return this.companies;
  }

  public getCompany(id: number): Company | undefined {
    if (!this.companies) return {id: 0, name: 'Unknown', logoUrl: undefined};
    return this.companies.find(company => company.id === id);
  }

  private async init() {
    if (this.companies) return;
    this.companies = await this.apiService.getCompanies();
  }
}
