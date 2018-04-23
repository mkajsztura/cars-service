import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { CarsListComponent } from './cars/cars-list/cars-list.component';

const APP_ROUTES: Route[] = [
    { path: 'cars', component: CarsListComponent},
    { path: '', pathMatch: 'full', redirectTo: 'cars'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
