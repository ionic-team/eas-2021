import { Injectable } from '@angular/core';
import { Speaker } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private speakers: Speaker[] = [
    {
      id: 1,
      firstName: 'Max',
      lastName: 'Lynch',
      role: 'Co-founder',
      company: 'Ionic',
      photoUrl: 'assets/photos/max.jpg'
    },
    {
      id: 2,
      firstName: 'Tom',
      lastName: 'Ingoglia',
      role: 'Director of Enterprise Architecture',
      company: 'US Foods',
      photoUrl: 'assets/photos/tom.jpg'
    },
    {
      id: 3,
      firstName: 'Thorsten',
      lastName: 'Jankowski',
      role: 'Design & User Experience Strategist',
      company: 'Volkswagen',
      photoUrl: 'https://picsum.photos/id/1/200'
    },
    {
      id: 4,
      firstName: 'Michel',
      lastName: 'Tobon',
      role: 'Front-End Engineer',
      company: 'Amazon',
      photoUrl: 'assets/photos/michael.jpg'
    },
    { id: 5,
      firstName: 'Stanci',
      lastName: 'Soderstrom',
      role: 'Manager of Learning Technology Strategy',
      company: 'T-Mobile',
      photoUrl: 'assets/photos/stanci.jpg'
    },
    {
      id: 6,
      firstName: 'Eric',
      lastName: 'Madsen',
      role: 'Learning Solutions Manager',
      company: 'T-Mobile',
      photoUrl: 'assets/photos/eric.jpg'
    },
    {
      id: 7,
      firstName: 'Brandon',
      lastName: 'Bakke',
      role: 'Solution Architect Leader',
      company: 'Doosan',
      photoUrl: 'assets/photos/brandon.jpg'
    },
    {
      id: 8,
      firstName: 'Daniel',
      lastName: 'Rodriguez',
      role: 'Mobile Developer',
      company: 'Norwex',
      photoUrl: 'assets/photos/daniel.jpg'
    },
    {
      id: 9,
      firstName: 'Rob',
      lastName: 'Gore',
      role: 'Director of Mobile Architecture',
      company: 'Norwex',
      photoUrl: 'assets/photos/rob.jpg'
    },
    {
      id: 10,
      firstName: 'Simanchal',
      lastName: 'Sahu',
      role: 'Sr. Principal Software Engineer Digital',
      company: 'Amtrak',
      photoUrl: 'assets/photos/simanchal.jpg'
    },
    {
      id: 11,
      firstName: 'Jedidiah',
      lastName: 'Weller',
      role: 'CEO',
      company: 'Open Forge',
      photoUrl: 'https://picsum.photos/id/1/200'
    },
    {
      id: 12,
      firstName: 'Paulina',
      lastName: 'G',
      role: 'Lead Software Engineer',
      company: 'Open Forge',
      photoUrl: 'https://picsum.photos/id/1/200'
    },
    {
      id: 13,
      firstName: 'David',
      lastName: '',
      role: 'Role',
      company: 'Modus',
      photoUrl: 'https://picsum.photos/id/1/200'
    },
    {
      id: 14,
      firstName: 'Eric',
      lastName: 'Violland',
      role: 'Role',
      company: 'AAA',
      photoUrl: 'https://picsum.photos/id/1/200'
    },
    {
      id: 15,
      firstName: 'First',
      lastName: 'Last',
      role: 'Role',
      company: 'Azure',
      photoUrl: 'https://picsum.photos/id/1/200'
    }
  ];

  constructor() {}

  getSpeakers(): Speaker[] {
    return this.speakers;
  }

  getSpeaker(id: number): Speaker | undefined {
    return this.speakers.find(speaker => speaker.id === id);
  }
}
