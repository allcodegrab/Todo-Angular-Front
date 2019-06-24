import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { eventRoutingModule } from './event-routing.module';
import { eventDetailComponent } from './event-detail/event-detail.component';
import { eventListComponent } from './event-list/event-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    eventRoutingModule
  ],
  declarations: [eventDetailComponent, eventListComponent]
})
export class eventModule { }
