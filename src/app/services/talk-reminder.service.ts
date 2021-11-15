import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class TalkReminderService  {
  async scheduleReminder() {

    console.log("setting reminder");
    const result = await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: "Test",
          body: "body",
          schedule: { at: new Date("November 15, 2021 15:40:00") }
        }
      ]
    });
    console.log(result);
  }
}
