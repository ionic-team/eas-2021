import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'agenda',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'speakers',
        loadChildren: () => import('../speakers/speakers.module').then(m => m.SpeakersPageModule)
      },
      {
        path: 'swag',
        loadChildren: () => import('../swag/swag.module').then(m => m.SwagPageModule)
      },
      {
        path: '',
        redirectTo: '/agenda',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/agenda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
