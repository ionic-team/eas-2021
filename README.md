# EAS 2021
Conference app for the 2021 [Enterprise App Summit](https://ionic.io/events/enterprise-app-summit-21) that runs on the web, iOS, and Android. This free, one day virtual event brings together tech leaders from around the world. Learn, engage, and connect with the experts using Ionic products and services to drive innovation within their companies.

Use this app to view the agenda, speaker and sponsor info, and enter to win free Ionic and EAS swag.

## Try the App

EAS 2021 runs on the web, iOS, and Android all from a single codebase. Try it on your device:

- iOS: Coming soon
- Android: Coming soon
- Web: [https://eas21.ionic.io](https://eas21.ionic.io) hosted on Vercel

## Features

**Agenda**: Display the conference's agenda including speakers, times, and talk titles. The first time the app is loaded, display a sheet modal asking the user if they'd like to get push notifications, such as a reminder when the event is about to start.

**Agenda Detail**: Tap on an agenda item to view details about the talk. "Remind Me" feature registers a local notification that triggers 5 minutes before the selected talk begins. 

**Speakers and Sponsors**: Scrollable list of speakers and sponsors with bio and social media links.

**Swag**: Enter to win free Ionci and EAS21 swag. Custom form built to collect attendee info for raffle giveaway. Powered by the Hubspot API.

## Tech Details

* UI: [Ionic 6](https://ionicframework.com) and [Angular 12](https://angular.io)
* Native runtime: [Capacitor 3](https://capacitorjs.com)
* Native features powered by Capacitor:
  * [Push Notifications](https://capacitorjs.com/docs/apis/push-notifications) powered by Firebase
  * [Local Notifications](https://capacitorjs.com/docs/apis/local-notifications) - Get reminders 5 minutes before talks start
  * [Storage](https://capacitorjs.com/docs/apis/storage) - remember user's response to push notifications prompt
* [Dark mode](https://ionicframework.com/docs/theming/dark-mode), powered by Ionic 6
* [Live Updates](), powered by Appflow: Deploy instant updates directly to your users. Used to immediately ship updates to the agenda/speaker schedule on the day of the event, without needing to go through the app store review process.

## How to Run

- Install the Ionic CLI: `npm install -g @ionic/cli`
- Clone this repository
- Run `npm install`
- Build the app: `ionic build` then `npx cap sync`
- To try the app locally on the web, run `ionic serve`
- Run the app on your device, using either `npx cap open android` or `npx cap open ios`
