import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { CarsListComponent } from './cars/cars-list/cars-list.component';

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'cars'},
  { path: 'cars', component: CarsListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES) // foRoot exportuje cały router module, zawiera usługi trasowania - wykonuje piersza nawigacje zalezna
    //  Wywołujemy metodę forRoot() ponieważ mechanizm trasowania jest dostarczony do korzenia aplikacji (do głównego modułu).
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
