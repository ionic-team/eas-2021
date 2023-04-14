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
        loadChildren: () => import('../agenda/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'speakers',
        loadChildren: () => import('../speakers/speakers.module').then(m => m.SpeakersPageModule)
      },
      {
        path: 'sponsors',
        loadChildren: () => import('../sponsors/sponsors.module').then(m => m.SponsorsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
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
