import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthTransitionPage } from './auth-transition.page';

const routes: Routes = [
  {
    path: '',
    component: AuthTransitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthTransitionPageRoutingModule {}
