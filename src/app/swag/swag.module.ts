import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwagPageRoutingModule } from './swag-routing.module';

import { SwagPage } from './swag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwagPageRoutingModule
  ],
  declarations: [SwagPage]
})
export class SwagPageModule {}
