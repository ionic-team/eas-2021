import { Injectable } from '@angular/core';
import { Speaker } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private speakers: Speaker[] = [
    { id: 1, name: 'Max Lynch', role: 'Co-founder', company: 'Ionic', photoUrl: 'assets/photos/max.jpg' },
    { id: 2, name: 'Tom Ingoglia', role: 'Director of Enterprise Architecture', company: 'US Foods', photoUrl: 'assets/photos/tom.jpg' },
    { id: 3, name: 'Thorsten Jankowski', role: 'Design & User Experience Strategist', company: 'Volkswagen', photoUrl: 'https://picsum.photos/id/1/200' },
    { id: 4, name: 'Michel Tobon', role: 'Front-End Engineer', company: 'Amazon', photoUrl: 'assets/photos/michael.jpg' },
    { id: 5, name: 'Stanci Soderstrom', role: 'Manager of Learning Technology Strategy', company: 'T-Mobile', photoUrl: 'assets/photos/stanci.jpg' },
    { id: 6, name: 'Eric Madsen', role: 'Learning Solutions Manager', company: 'T-Mobile', photoUrl: 'assets/photos/eric.jpg' },
    { id: 7, name: 'Brandon Bakke', role: 'Solution Architect Leader', company: 'Doosan', photoUrl: 'assets/photos/brandon.jpg' },
    { id: 8, name: 'Daniel Rodriguez', role: 'Mobile Developer', company: 'Norwex', photoUrl: 'https://picsum.photos/id/1/200' },
    { id: 9, name: 'Rob Gore', role: 'Director of Mobile Architecture', company: 'Norwex', photoUrl: 'assets/photos/rob.jpg' },
    { id: 10, name: 'Simanchal Sahu', role: 'Sr. Principal Software Engineer Digital', company: 'Amtrak', photoUrl: 'assets/photos/simanchal.jpg' },
    { id: 11, name: 'Jedidiah Weller', role: 'CEO', company: 'Open Forge', photoUrl: 'https://picsum.photos/id/1/200' },
    { id: 12, name: 'Paulina G', role: 'Lead Software Engineer', company: 'Open Forge', photoUrl: 'https://picsum.photos/id/1/200' },
    { id: 13, name: 'David', role: 'Role', company: 'Modus', photoUrl: 'https://picsum.photos/id/1/200' },
    { id: 14, name: 'Eric Violland', role: 'Role', company: 'AAA', photoUrl: 'https://picsum.photos/id/1/200' },
    { id: 15, name: 'Name', role: 'Role', company: 'Azure', photoUrl: 'https://picsum.photos/id/1/200' }
  ];

  constructor() {}

  getSpeakers(): Speaker[] {
    return this.speakers;
  }

  getSpeaker(id: number): Speaker | undefined {
    return this.speakers.find(speaker => speaker.id === id);
  }
}
