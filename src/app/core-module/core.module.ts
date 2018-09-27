import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // zawiera dyrektywy ngFor ngIf ngClass itd
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
  ],
  declarations: [SidebarComponent]
})
export class CoreModule { }
