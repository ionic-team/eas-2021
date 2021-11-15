import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class TalkReminderService  {
  constructor(private ngZone: NgZone, public router: Router) {
    this.configure();
  }

  // Navigate the user to the talk they wanted to be reminded about
  async configure() {
    LocalNotifications.addListener("localNotificationActionPerformed", (notification => {
      this.ngZone.run(() => {
        this.router.navigate([`agenda/${notification.notification.extra.agendaId}`]);
      });
    }));
  }
  
  async scheduleReminder() {
    
    const result = await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: "Starting soon!",
          body: "Stencil at Amazon",
          //schedule: { at: new Date("November 15, 2021 16:1:00") },
          extra: {
            agendaId: 4
          }
        }
      ]
    });
  }
}
