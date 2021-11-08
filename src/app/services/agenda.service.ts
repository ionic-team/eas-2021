import { Injectable } from '@angular/core';
import { AgendaItem } from '../types';

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque accumsan lacus, vel rhoncus quam. Maecenas metus tellus, convallis sed convallis eu, bibendum vulputate nisl. Vivamus et odio sit amet ex porttitor tempor et eget nunc. Suspendisse nibh augue, vestibulum in nibh et, rutrum vulputate est. Aenean eu bibendum libero. Morbi non dapibus mauris, eget ultricies purus. Nam malesuada, dui ac pretium sodales, purus sem aliquet orci, non venenatis turpis tortor sit amet arcu. Nulla facilisis, orci a fermentum facilisis, ipsum ligula faucibus ligula, vel bibendum turpis dolor eget nunc.';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda: AgendaItem[] = [
    {
      id: 1,
      title: 'Opening Keynote',
      speakerId: 1,
      startTime: '08:00',
      endTime: '09:00',
      description: LOREM_IPSUM
    },
    {
      id: 2,
      title: 'Building US Food\'s Flagship app with Ionic ',
      speakerId: 2,
      startTime: '09:00',
      endTime: '10:00',
      description: LOREM_IPSUM
    },
    {
      id: 3,
      title: 'Stencil at Volkswagen',
      speakerId: 3,
      startTime: '10:00',
      endTime: '11:00',
      description: LOREM_IPSUM
    },
    {
      id: 4,
      title: 'Stencil at Amazon',
      speakerId: 4,
      startTime: '11:00',
      endTime: '11:30',
      description: LOREM_IPSUM
    },
    {
      id: 5,
      title: 'Customer Showcase',
      speakerId: 5,
      startTime: '11:30',
      endTime: '12:00',
      description: LOREM_IPSUM
    },
    {
      id: 6,
      title: 'Customer Interview',
      speakerId: 7,
      startTime: '12:00',
      endTime: '12:30',
      description: LOREM_IPSUM
    },
    {
      id: 7,
      title: 'Customer Showcase',
      speakerId: 8,
      startTime: '12:30',
      endTime: '1:00',
      description: LOREM_IPSUM
    },
    {
      id: 8,
      title: 'Customer Interview',
      speakerId: 10,
      startTime: '1:00',
      endTime: '2:00',
      description: LOREM_IPSUM
    },
    {
      id: 9,
      title: 'Partner Session',
      speakerId: 11,
      startTime: '2:00',
      endTime: '2:30',
      description: LOREM_IPSUM
    },
    {
      id: 10,
      title: 'Partner Session',
      speakerId: 13,
      startTime: '2:30',
      endTime: '3:00',
      description: LOREM_IPSUM
    },
    {
      id: 11,
      title: 'Customer Showcase',
      speakerId: 14,
      startTime: '3:00',
      endTime: '3:30',
      description: LOREM_IPSUM
    },
    {
      id: 12,
      title: 'TBD',
      speakerId: 15,
      startTime: '3:30',
      endTime: '4:00',
      description: LOREM_IPSUM
    },
    {
      id: 13,
      title: 'End',
      speakerId: 1,
      startTime: '4:00',
      endTime: '4:30',
      description: LOREM_IPSUM
    }
  ];

  constructor() {}

  getAgenda(): AgendaItem[] {
    return this.agenda;
  }

  getAgendaItem(id: number): AgendaItem | undefined {
    return this.agenda.find(agenda => agenda.id === id);
  }
}
