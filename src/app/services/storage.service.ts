import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService  {
  async setPushNotesModalShown() {
    await Storage.set({
      key: 'pushmodalshown',
      value: 'true'
    });
  }

  async getPushNotesModalShown() {
    const { value } = await Storage.get({ key: 'pushmodalshown'});
    return value;
  }
}
