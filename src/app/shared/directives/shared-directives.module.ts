import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarDirective, SidebarContainerDirective, SidebarContentDirective, SidebarTogglerDirective } from './sidebar.directive';

const directives = [
  SidebarDirective,
  SidebarContainerDirective,
  SidebarContentDirective,
  SidebarTogglerDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class SharedDirectivesModule { }
