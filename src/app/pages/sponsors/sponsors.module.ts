import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SponsorsPageRoutingModule } from './sponsors-routing.module';

import { SponsorsPage } from './sponsors.page';
import { SponsorCardComponentModule } from '../../components/sponsor-card/sponsor-card.module';
import { SponsorViewComponentModule } from '../../components/sponsor-view/sponsor-view.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SponsorsPageRoutingModule,
    SponsorCardComponentModule,
    SponsorViewComponentModule
  ],
  declarations: [SponsorsPage]
})
export class SponsorsPageModule {}
