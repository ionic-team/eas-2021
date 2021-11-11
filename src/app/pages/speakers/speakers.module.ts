import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakersPageRoutingModule } from './speakers-routing.module';

import { SpeakersPage } from './speakers.page';
import { SpeakerCardComponentModule } from '../../components/speaker-card/speaker-card.module';
import { SpeakerViewComponentModule } from '../../components/speaker-view/speaker-view.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakersPageRoutingModule,
    SpeakerCardComponentModule,
    SpeakerViewComponentModule
  ],
  declarations: [SpeakersPage]
})
export class SpeakersPageModule {}
