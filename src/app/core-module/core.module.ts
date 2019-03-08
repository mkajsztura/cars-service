import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // zawiera dyrektywy ngFor ngIf ngClass itd
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    SpinnerComponent
  ],
  declarations: [SidebarComponent, SpinnerComponent]
})
export class CoreModule { }
