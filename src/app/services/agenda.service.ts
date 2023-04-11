import { Injectable } from '@angular/core';
import { AgendaItem } from '../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda: AgendaItem[];

  constructor(private apiService: ApiService) {}

  async init() {
    if (this.agenda) return;
   this.agenda = await this.apiService.getAgenda();
  }

  async getAgenda(): Promise<AgendaItem[]> {
    await this.init();
    return this.agenda;
  }

  async getAgendaItem(id: number): Promise<AgendaItem | undefined> {
    await this.init();
    return this.agenda.find(agenda => agenda.id === id);
  }

  public formatTalkTime(agendaItem: AgendaItem) {
    return `${this.convertToTwelveHourFormat(agendaItem.startTime)} - ${this.convertToTwelveHourFormat(agendaItem.endTime)} CT`;
  }

  // Talk times are stored in military time to make it easier to work with
  // local notifications. Convert to 12 hour clock format.
  // Likely better ways to do this with Date object.

  // time: 08:00 AM, 12:30 PM, 14:00 PM etc.
  private convertToTwelveHourFormat(time: string) {
    let hour = parseInt(time.substring(0,2), 10);

    if (hour > 12) {
      hour = hour - 12;
    }

    return hour + time.slice(2);
  }
}
