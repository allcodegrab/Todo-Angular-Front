import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'event',
    pathMatch: 'full'
  },
 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      
      {
        path: 'event',
        loadChildren: './views/event/event.module#eventModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
