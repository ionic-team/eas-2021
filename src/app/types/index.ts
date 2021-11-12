export class HubspotFormData {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  country_pl_: string;
  state?: string;
  t_shirt_size: string;
}

export interface AgendaItem {
  id: number;
  title: string;
  description: string;
  speakerIds: number[];
  startTime: string;
  endTime: string;
}

export interface Speaker {
  id: number;
  firstName: string;
  lastName: string;
  companyId: number;
  role: string;
  photoUrl: string;
  biography: string;
}

export interface Company {
  id: number;
  name: string;
  logoUrl: string;
}
