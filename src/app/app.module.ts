import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core-module/core.module';
import { CarsService } from './cars/cars.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { LayoutService } from './shared/services/layout.service';
import { LoginModule } from './login/login.module';
import { CanLoadGuard } from './auth/can-load.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [CarsService, AuthService, AuthGuard, LayoutService, CanLoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
