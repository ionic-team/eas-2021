import { Injectable } from '@angular/core';
import { Company } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies: Company[] = [
    {
      id: 1,
      name: 'Ionic',
      logoUrl: 'assets/logos/company-ionic.png'
    },
    {
      id: 2,
      name: 'US Foods',
      logoUrl: 'assets/logos/company-us-foods.png'
    },
    {
      id: 3,
      name: 'Volkswagen',
      logoUrl: 'assets/logos/company-volkswagen.png'
    },
    {
      id: 4,
      name: 'Amazon',
      logoUrl: 'assets/logos/company-amazon.png'
    },
    {
      id: 5,
      name: 'T-Mobile',
      logoUrl: 'assets/logos/company-t-mobile.png'
    },
    {
      id: 6,
      name: 'Doosan (Bobcat)',
      logoUrl: 'assets/logos/company-bobcat.png'
    },
    {
      id: 7,
      name: 'Norwex',
      logoUrl: 'assets/logos/company-norwex.png'
    },
    {
      id: 8,
      name: 'Amtrak',
      logoUrl: 'assets/logos/company-amtrak.png'
    },
    {
      id: 9,
      name: 'OpenForge',
      logoUrl: 'assets/logos/company-openforge.png'
    },
    {
      id: 10,
      name: 'Modus',
      logoUrl: 'assets/logos/company-modus.png'
    },
    {
      id: 11,
      name: 'AAA',
      logoUrl: 'assets/logos/company-aaa.png'
    },
    {
      id: 12,
      name: 'Azure',
      logoUrl: 'assets/logos/company-azure.png'
    },
  ];

  constructor() {}

  getCompanies(): Company[] {
    return this.companies;
  }

  getCompany(id: number): Company | undefined {
    return this.companies.find(company => company.id === id);
  }
}
