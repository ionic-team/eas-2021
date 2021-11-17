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
      speakerIds: [1],
      startTime: '08:00',
      endTime: '09:00',
      description: LOREM_IPSUM
    },
    {
      id: 2,
      title: 'Building US Food\'s Flagship app with Ionic ',
      speakerIds: [2],
      startTime: '09:00',
      endTime: '10:00',
      description: LOREM_IPSUM
    },
    {
      id: 3,
      title: 'Stencil at Volkswagen',
      speakerIds: [3],
      startTime: '10:00',
      endTime: '11:00',
      description: LOREM_IPSUM
    },
    {
      id: 4,
      title: 'Stencil at Amazon',
      speakerIds: [4],
      startTime: '11:00',
      endTime: '11:30',
      description: LOREM_IPSUM
    },
    {
      id: 5,
      title: 'Customer Showcase',
      speakerIds: [5, 6],
      startTime: '11:30',
      endTime: '12:00',
      description: LOREM_IPSUM
    },
    {
      id: 6,
      title: 'Customer Interview',
      speakerIds: [7],
      startTime: '12:00',
      endTime: '12:30',
      description: LOREM_IPSUM
    },
    {
      id: 7,
      title: 'Customer Showcase',
      speakerIds: [8, 9],
      startTime: '12:30',
      endTime: '13:00',
      description: LOREM_IPSUM
    },
    {
      id: 8,
      title: 'Customer Interview',
      speakerIds: [10],
      startTime: '13:00',
      endTime: '14:00',
      description: LOREM_IPSUM
    },
    {
      id: 9,
      title: 'Partner Session',
      speakerIds: [11, 12],
      startTime: '14:00',
      endTime: '14:30',
      description: LOREM_IPSUM
    },
    {
      id: 10,
      title: 'Partner Session',
      speakerIds: [13],
      startTime: '14:30',
      endTime: '15:00',
      description: LOREM_IPSUM
    },
    {
      id: 11,
      title: 'Customer Showcase',
      speakerIds: [14],
      startTime: '15:00',
      endTime: '15:30',
      description: LOREM_IPSUM
    },
    {
      id: 12,
      title: 'TBD',
      speakerIds: [15],
      startTime: '15:30',
      endTime: '16:00',
      description: LOREM_IPSUM
    },
    {
      id: 13,
      title: 'End',
      speakerIds: [1],
      startTime: '16:00',
      endTime: '16:30',
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
