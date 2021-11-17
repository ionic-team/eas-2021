import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AgendaItem } from '../types';

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
  
  async scheduleReminder(agendaItem: AgendaItem) {
    // Set reminder for 5 minutes before the talk begins
    const reminderDate = new Date(`December 8, 2021 ${agendaItem.startTime}:00`);
    console.log(reminderDate);
    reminderDate.setMinutes(reminderDate.getMinutes() - 5);
    console.log(reminderDate);
    
    // Schedule reminder
    const result = await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: "Starting soon!",
          body: agendaItem.title,
          //schedule: { at: reminderDate },
          extra: {
            agendaId: agendaItem.id
          }
        }
      ]
    });
  }
}
