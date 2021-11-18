import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AgendaCardComponentModule } from '../../components/agenda-card/agenda-card.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PermissionsModalComponentModule } from 'src/app/components/permissions-modal/permissions-modal.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AgendaCardComponentModule,
    Tab1PageRoutingModule,
    PermissionsModalComponentModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
