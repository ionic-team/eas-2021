import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakersPage } from './speakers.page';

const routes: Routes = [
  {
    path: '',
    component: SpeakersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakersPageRoutingModule {}
