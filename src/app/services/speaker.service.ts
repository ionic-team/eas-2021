import { Injectable } from '@angular/core';
import { Speaker } from '../types';

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque accumsan lacus, vel rhoncus quam. Maecenas metus tellus, convallis sed convallis eu, bibendum vulputate nisl. Vivamus et odio sit amet ex porttitor tempor et eget nunc. Suspendisse nibh augue, vestibulum in nibh et, rutrum vulputate est. Aenean eu bibendum libero. Morbi non dapibus mauris, eget ultricies purus. Nam malesuada, dui ac pretium sodales, purus sem aliquet orci, non venenatis turpis tortor sit amet arcu. Nulla facilisis, orci a fermentum facilisis, ipsum ligula faucibus ligula, vel bibendum turpis dolor eget nunc.';


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
      photoUrl: 'assets/photos/max.jpg',
      biography: LOREM_IPSUM
    },
    {
      id: 2,
      firstName: 'Tom',
      lastName: 'Ingoglia',
      role: 'Director of Enterprise Architecture',
      company: 'US Foods',
      photoUrl: 'assets/photos/tom.jpg',
      biography: LOREM_IPSUM
    },
    {
      id: 3,
      firstName: 'Thorsten',
      lastName: 'Jankowski',
      role: 'Design & User Experience Strategist',
      company: 'Volkswagen',
      photoUrl: 'https://picsum.photos/id/1/200',
      biography: LOREM_IPSUM
    },
    {
      id: 4,
      firstName: 'Michel',
      lastName: 'Tobon',
      role: 'Front-End Engineer',
      company: 'Amazon',
      photoUrl: 'assets/photos/michael.jpg',
      biography: LOREM_IPSUM
    },
    { id: 5,
      firstName: 'Stanci',
      lastName: 'Soderstrom',
      role: 'Manager of Learning Technology Strategy',
      company: 'T-Mobile',
      photoUrl: 'assets/photos/stanci.jpg',
      biography: LOREM_IPSUM
    },
    {
      id: 6,
      firstName: 'Eric',
      lastName: 'Madsen',
      role: 'Learning Solutions Manager',
      company: 'T-Mobile',
      photoUrl: 'assets/photos/eric.jpg',
      biography: LOREM_IPSUM
    },
    {
      id: 7,
      firstName: 'Brandon',
      lastName: 'Bakke',
      role: 'Solution Architect Leader',
      company: 'Doosan',
      photoUrl: 'assets/photos/brandon.jpg',
      biography: LOREM_IPSUM
    },
    {
      id: 8,
      firstName: 'Daniel',
      lastName: 'Rodriguez',
      role: 'Mobile Developer',
      company: 'Norwex',
      photoUrl: 'assets/photos/daniel.jpg',
      biography: LOREM_IPSUM
    },
    {
      id: 9,
      firstName: 'Rob',
      lastName: 'Gore',
      role: 'Director of Mobile Architecture',
      company: 'Norwex',
      photoUrl: 'assets/photos/rob.jpg',
      biography: LOREM_IPSUM
    },
    {
      id: 10,
      firstName: 'Simanchal',
      lastName: 'Sahu',
      role: 'Sr. Principal Software Engineer Digital',
      company: 'Amtrak',
      photoUrl: 'assets/photos/simanchal.jpg',
      biography: LOREM_IPSUM
    },
    {
      id: 11,
      firstName: 'Jedidiah',
      lastName: 'Weller',
      role: 'CEO',
      company: 'Open Forge',
      photoUrl: 'https://picsum.photos/id/1/200',
      biography: LOREM_IPSUM
    },
    {
      id: 12,
      firstName: 'Paulina',
      lastName: 'Gallo',
      role: 'Lead Software Engineer',
      company: 'Open Forge',
      photoUrl: 'https://picsum.photos/id/1/200',
      biography: LOREM_IPSUM
    },
    {
      id: 13,
      firstName: 'Robert',
      lastName: 'Flagg',
      role: 'Role',
      company: 'Modus',
      photoUrl: 'https://picsum.photos/id/1/200',
      biography: LOREM_IPSUM
    },
    {
      id: 14,
      firstName: 'Eric',
      lastName: 'Violland',
      role: 'Role',
      company: 'AAA',
      photoUrl: 'https://picsum.photos/id/1/200',
      biography: LOREM_IPSUM
    },
    {
      id: 15,
      firstName: 'First',
      lastName: 'Last',
      role: 'Role',
      company: 'Azure',
      photoUrl: 'https://picsum.photos/id/1/200',
      biography: LOREM_IPSUM
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
