import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../shared-module/shared.module';
import { CarsRoutingModule } from './cars-routing.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarsRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [CarsListComponent],
  declarations:  [CarsListComponent, TotalCostComponent, CarDetailsComponent]
})
export class CarsModule { }
