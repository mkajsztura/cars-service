import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    RouterModule
  ],
  declarations: [SidebarComponent]
})
export class CoreModule { }
