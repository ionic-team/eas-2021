import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaItemPageRoutingModule } from './agenda-item-routing.module';

import { AgendaItemPage } from './agenda-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaItemPageRoutingModule
  ],
  declarations: [AgendaItemPage]
})
export class AgendaItemPageModule {}
