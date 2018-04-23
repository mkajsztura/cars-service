import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';

const CARS_ROUTES: Route[] = [
  { path: 'cars/:id', component: CarDetailsComponent } // do routerLink trzeba przekazać ścieżkę i id
];

@NgModule({
imports: [
  RouterModule.forChild(CARS_ROUTES)
],
// jeżeli routing realizowany w głównym module app-module wtedy nie trzeba exportować tutaj Router Module
exports: [
  RouterModule
]
})
export class CarsRoutingModule { }
