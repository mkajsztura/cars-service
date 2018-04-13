import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const CARS_ROUTES : Route[] = [
  // { path: 'cars/:id', component: CarsDetailsComponent}
]

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
