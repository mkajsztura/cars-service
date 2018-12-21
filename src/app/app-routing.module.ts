import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CanLoadGuard } from './auth/can-load.guard';

const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'cars',
    canLoad: [CanLoadGuard],
    loadChildren: 'app/cars/cars.module#CarsModule'
  }
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
