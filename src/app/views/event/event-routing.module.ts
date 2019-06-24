import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { eventListComponent } from './event-list/event-list.component';
import { eventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
    {
        path: '',
        component: eventListComponent
    },
    {
        path: 'new',
        component: eventDetailComponent
    },
    {
        path: 'edit/:id',
        component: eventDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class eventRoutingModule { }
