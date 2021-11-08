import { Injectable } from '@angular/core';
import { AgendaItem } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda: AgendaItem[] = [
    { id: 1, title: 'Opening Keynote', speakerId: 1, startTime: '08:00', endTime: '09:00' },
    { id: 2, title: 'Building US Food\'s Flagship app with Ionic ', speakerId: 2, startTime: '09:00', endTime: '10:00' },
    { id: 3, title: 'Stencil at Volkswagen', speakerId: 3, startTime: '10:00', endTime: '11:00' },
    { id: 4, title: 'Stencil at Amazon', speakerId: 4, startTime: '11:00', endTime: '11:30' },
    { id: 5, title: 'Customer Showcase', speakerId: 5, startTime: '11:30', endTime: '12:00' },
    { id: 6, title: 'Customer Interview', speakerId: 7, startTime: '12:00', endTime: '12:30' },
    { id: 7, title: 'Customer Showcase', speakerId: 8, startTime: '12:30', endTime: '1:00' },
    { id: 8, title: 'Customer Interview', speakerId: 10, startTime: '1:00', endTime: '2:00' },
    { id: 9, title: 'Partner Session', speakerId: 11, startTime: '2:00', endTime: '2:30' },
    { id: 10, title: 'Partner Session', speakerId: 13, startTime: '2:30', endTime: '3:00' },
    { id: 11, title: 'Customer Showcase', speakerId: 14, startTime: '3:00', endTime: '3:30' },
    { id: 12, title: 'TBD', speakerId: 15, startTime: '3:30', endTime: '4:00' },
    { id: 13, title: 'End', speakerId: 1, startTime: '4:00', endTime: '4:30' }
  ];

  constructor() {}

  getAgenda(): AgendaItem[] {
    return this.agenda;
  }
}
