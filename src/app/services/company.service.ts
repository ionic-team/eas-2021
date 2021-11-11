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
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 2,
      name: 'US Foods',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 3,
      name: 'Volkswagen',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 4,
      name: 'Amazon',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 5,
      name: 'T-Mobile',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 6,
      name: 'Doosan',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 7,
      name: 'Norwex',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 8,
      name: 'Amtrak',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 9,
      name: 'OpenForge',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 10,
      name: 'Modus',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 11,
      name: 'AAA',
      logoUrl: 'assets/logos/ionic.png'
    },
    {
      id: 12,
      name: 'Azure',
      logoUrl: 'assets/logos/ionic.png'
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
