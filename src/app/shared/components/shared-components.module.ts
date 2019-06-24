import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FooterComponent } from './footer/footer.component';

const components = [
 
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  AdminLayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedPipesModule,
    SharedDirectivesModule,
    NgbModule
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
