import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaCardComponent } from './agenda-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AgendaCardComponent],
  exports: [AgendaCardComponent]
})
export class AgendaCardComponentModule {}
