import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwagPage } from './swag.page';

const routes: Routes = [
  {
    path: '',
    component: SwagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwagPageRoutingModule {}
