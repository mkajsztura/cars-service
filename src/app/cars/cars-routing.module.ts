import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarResolve} from './car-resolve-service';
import { CarsComponent } from './cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CanFormDeactivateGuard } from '../guards/form-can-deactivate.guard';

const CARS_ROUTES: Route[] = [
  {
    path: '',
    component: CarsComponent,
    children: [
      {
        path: '',
        component: CarsListComponent,
        canDeactivate: [CanFormDeactivateGuard]
      },
      {
        path: ':id', // do routerLink trzeba przekazać ścieżkę i id
        component: CarDetailsComponent,
        resolve: {car: CarResolve}, // odpala sie poprzez this.route.snapshot.data['car'];
      }
    ]
  }
];

@NgModule({
imports: [
  RouterModule.forChild(CARS_ROUTES) // for child exportuje tylko ścieżki, nie zawiera usługi trasowania
],
// jeżeli routing realizowany w głównym module app-module wtedy nie trzeba exportować tutaj Router Module
exports: [
  RouterModule
]
})
export class CarsRoutingModule { }
