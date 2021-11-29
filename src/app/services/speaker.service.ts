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
      role: 'CEO and Co-founder',
      companyId: 1,
      photoUrl: 'assets/photos/max.jpg',
      twitter: "https://twitter.com/maxlynch",
      linkedin: "https://www.linkedin.com/in/maxlynch/",
      biography: `Max Lynch is the co-founder and CEO of Ionic.

Max started Ionic to make app development easier for millions of developers around the world. Over the past ten years, Ionic has grown from a purely open source developer project into a fully-featured enterprise platform powering thousands of the biggest companies on earth.`
    },
    {
      id: 2,
      firstName: 'Tom',
      lastName: 'Ingoglia',
      role: 'Director of Enterprise Architecture',
      companyId: 2,
      photoUrl: 'assets/photos/tom.jpg',
      linkedin: "https://www.linkedin.com/in/thomasingoglia/",
      biography: `Thomas Ingoglia is the director of enterprise architecture at US Foods.

Thomas has a passion for software development and over 20 years industry experience. At US Foods, he leads a team of engineers who develops B2B mobile applications for customers to order, record, and manage their inventory from any device.`
    },
    {
      id: 3,
      firstName: 'Thorsten',
      lastName: 'Jankowski',
      role: 'Design & User Experience Strategist',
      companyId: 3,
      photoUrl: 'assets/photos/thorsten.jpg',
      twitter: "https://twitter.com/ux_wob",
      linkedin: "https://www.linkedin.com/in/thorstenjankowski/",
      biography: `Thorsten is the design & user experience strategist at Volkswagen AG.

For the past 17 years at Volkswagen, Thorsten has grown from IT system analyst to user experience lead. He currently leads UX design management including definition and delivery of assets, methods, and tools for a creative and efficient design organization.`
    },
    {
      id: 4,
      firstName: 'Michel',
      lastName: 'Tobon',
      role: 'Front-End Engineer',
      companyId: 4,
      photoUrl: 'assets/photos/michael.jpg',
      linkedin: "https://www.linkedin.com/in/michel-tobon/",
      github: "https://github.com/micheltobon",
      biography: `Michel Tobon is a front-end engineer at Amazon.

After working as a back-end developer in his home country of Mexico, Michel moved to Seattle and began working at Amazon, primarily with React and SASS, sometimes with Java and Node. Now almost five years into his tenure, he works with web components built with Ionic’s Stencil JS and micro front-end architecture.`
    },
    { id: 5,
      firstName: 'Stanci',
      lastName: 'Soderstrom',
      role: 'Manager of Learning Technology Strategy',
      companyId: 5,
      photoUrl: 'assets/photos/stanci.jpg',
      linkedin: "https://www.linkedin.com/in/stanci-soderstrom-77725811a/",
      biography: `Stanci Soderstrom is the manager of learning technology strategy at T-Mobile.

For more than 20 years, Stanci has managed high-profile communication programs, as well as learning technology and strategy across multiple organizations. At T-Mobile, she cares about the employee experience and fostering collaborative relationships between teams to grow opportunity and learning.`
    },
    {
      id: 6,
      firstName: 'Eric',
      lastName: 'Madsen',
      role: 'Learning Solutions Architect',
      companyId: 5,
      photoUrl: 'assets/photos/eric.jpg',
      linkedin: "https://www.linkedin.com/in/ericmadsendesign/",
      biography: `Eric Madsen is a learning technology architect at T-Mobile.

Eric is a dedicated and passionate leader. At T-Mobile, he applies his creative and divergent thinking, design, and technical skills to help professionals communicate effectively and improve end user performance.`
    },
    {
      id: 7,
      firstName: 'Brandon',
      lastName: 'Bakke',
      role: 'Solution Architect Leader',
      companyId: 6,
      photoUrl: 'assets/photos/brandon.jpg',
      linkedin: "https://www.linkedin.com/in/brandonbakke/",
      biography: `Brandon Bakke is a solution architect at Doosan Bobcat.

At Bobcat, Brandon works on the architectural design and technology selection for Machine IQ which serves as the company’s first digital, subscription-based product leveraging IoT technologies.`
    },
    {
      id: 8,
      firstName: 'Daniel',
      lastName: 'Rodriguez',
      role: 'Mobile Developer',
      companyId: 7,
      photoUrl: 'assets/photos/daniel.jpg',
      linkedin: "https://www.linkedin.com/in/danielrdzm/",
      biography: `Daniel Rodriguez is the lead mobile developer at Norwex.

At Norwex, Daniel leads the production and release of an international B2C app for the Australia and New Zealand market. He also works closely with business partners, project managers, and team members to clearly define scope of work for mobile app builts.`
    },
    {
      id: 9,
      firstName: 'Rob',
      lastName: 'Gore',
      role: 'Director of Mobile Architecture',
      companyId: 7,
      photoUrl: 'assets/photos/rob.jpg',
      linkedin: "https://www.linkedin.com/in/robgore/",
      biography: `Rob Gore is the director of mobile applications at Norwex.

For more than half a decade, Rob has led multiple mobile development projects at Norwex, including the design, development, and international release of Norwex Shopping. He is currently leading the development of the next generation enterprise ecommerce mobile application to be deployed in over eleven countries.`
    },
    {
      id: 11,
      firstName: 'Jedidiah',
      lastName: 'Weller',
      role: 'CEO',
      companyId: 9,
      photoUrl: 'assets/photos/jedidiah.jpg',
      twitter: "https://twitter.com/jedihacks",
      linkedin: "https://www.linkedin.com/in/jedidiahweller/",
      biography: `Jedidiah Weller (Jedi) is CEO at OpenForge and the founder of Startup Wars.

He speaks and mentors at startup events across the world, including the Thailand Startup Summit, San Francisco’s Developer Week, Austin’s SXSW. Jedi also organizes Startup Junto, Ionic, and Angular meetups in Philadelphia. When not working, Jedi can be found playing strategy games, hiking, and performing Jedi mind-tricks to masses.`
    },
    {
      id: 12,
      firstName: 'Paulina',
      lastName: 'Gallo',
      role: 'Lead Software Engineer',
      companyId: 9,
      photoUrl: 'assets/photos/paulina.jpg',
      twitter: "https://twitter.com/paulpaultweets",
      biography: `Paulina Gallo is the lead software engineer at OpenForge.

Paulina has over five years of experience leading multiple app development projects for many clients. She uses a variety of tools and technologies—including Ionic and Capacitor—to deliver the best experiences for her clients and their customers.`
    },
    {
      id: 15,
      firstName: 'Fernando',
      lastName: 'Del Olmo',
      role: 'Software Engineer',
      companyId: 9,
      photoUrl: 'assets/photos/fernando.jpg',
      twitter: "https://twitter.com/fdom92",
      biography: `Fernando is a software engineer at OpenForge.
      
Based in Madrid, Spain, Fernando studied computer engineering and taught himself Ionic and Angular frameworks. He is interested in everything related to the web, but mostly web components and Progressive Web Apps.`
    },
    {
      id: 16,
      firstName: 'María',
      lastName: 'José Méndez',
      role: 'Senior Software Engineer',
      companyId: 9,
      photoUrl: 'assets/photos/maria.jpg',
      twitter: "https://twitter.com/marimendez88",
      linkedin: "https://www.linkedin.com/in/marimendez88/",
      biography: `Maria Jose Mendez is a software engineer at OpenForge.

Maria is from Costa Rica and loves to learn, teach, and code in the middle of amazing beaches, living the Pura Vida life!`
    },
    {
      id: 13,
      firstName: 'Robert',
      lastName: 'Flagg',
      role: 'Director of Engineering',
      companyId: 10,
      photoUrl: 'assets/photos/robert.jpg',
      linkedin: "https://www.linkedin.com/in/robert-flagg-ab62b819/",
      biography: `Robert Flagg is the director of engineering at Modus Create, Inc.

Robert is a passionate software developer with nearly 40 years of experience developing full stack applications. His most recent work specializes in Ionic-based mobile solutions using Angular and web components.`
    },
    {
      id: 14,
      firstName: 'Ralph',
      lastName: 'Borges',
      role: 'Product Manager',
      companyId: 11,
      photoUrl: 'https://picsum.photos/id/1/200',
      linkedin: "https://www.linkedin.com/in/ralph-borges-10a91335/",
      biography: `Ralph Borges is the product manager at AAA National.

For over half a decade, Ralph has provided strategic design and solutions for AAA customers using iOS and Android devices. His focus is on team and client support, and building and managing a strong working organization that enables the highest level of ethics, customer care, and project delivery.`
    },
    {
      id: 17,
      firstName: 'Theo',
      lastName: 'Rushin Jr.',
      role: 'Lead Software Engineer',
      companyId: 8,
      photoUrl: 'assets/photos/theo.jpeg',
      linkedin: "https://www.linkedin.com/in/therush/",
      biography: `Theo Rushin Jr is a lead software engineer at Amtrak. 

Theo is a creative, results-oriented professional with decades of application development and training experience. At Amtrak, he leads the deployment of new functionality, enhancements, and fixes to the Amtrak mobile app. Theo is responsible for bringing new technology trends to enterprise and customer-facing hybrid mobile applications.`
    },
    {
      id: 18,
      firstName: 'Kalyan',
      lastName: 'Sury',
      role: 'Senior Software Engineering Manager',
      companyId: 8,
      photoUrl: 'assets/photos/kalyan.jpg',
      linkedin: "https://www.linkedin.com/in/kalyansury/",
      biography: `Kalyan Sury is the senior software engineering manager of e-commerce and digital experience at Amtrak.

Kalyan is an accomplished leader with expertise in software engineering, application development, service management, technical program & people management for e-commerce, custom architectures, and platforms. At Amtrak, he is responsible for design, development, and delivery of critical e-commerce systems including amtrak.com and the Amtrak mobile app accounting for a majority of the ticketing revenues.`
    },
    {
      id: 19,
      firstName: 'Dallas',
      lastName: 'James',
      role: 'Product Manager',
      companyId: 1,
      photoUrl: 'assets/photos/dallas.jpg',
      linkedin: "https://www.linkedin.com/in/dallastjames/",
      biography: `Dallas James is Ionic's platform extensions product manager.`
    }
  ];

  constructor() {}

  getSpeakers(ids?: number[]): Speaker[] {
    if (ids === undefined) { return this.speakers; }

    return this.speakers.filter(speaker => ids.includes(speaker.id));
  }

  getSpeaker(id: number): Speaker | undefined {
    return this.speakers.find(speaker => speaker.id === id);
  }
}
