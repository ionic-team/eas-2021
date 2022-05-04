import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthTransitionPageRoutingModule } from './auth-transition-routing.module';

import { AuthTransitionPage } from './auth-transition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthTransitionPageRoutingModule
  ],
  declarations: [AuthTransitionPage]
})
export class AuthTransitionPageModule {}
