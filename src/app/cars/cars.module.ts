import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../shared-module/shared.module';
import { CarsRoutingModule } from './cars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarsRoutingModule
  ],
  exports: [CarsListComponent],
  declarations:  [CarsListComponent, TotalCostComponent]
})
export class CarsModule { }
