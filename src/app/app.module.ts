import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core-module/core.module';
import { CarsService } from './cars/cars.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LayoutService } from './shared/services/layout.service';
import { LoginModule } from './login/login.module';
import { CanLoadGuard } from './guards/can-load.guard';
import { CanFormDeactivateGuard } from './guards/form-can-deactivate.guard';
import { SharedModule } from './shared-module/shared.module';

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
    SharedModule
  ],
  providers: [CarsService, AuthService, AuthGuard, LayoutService, CanLoadGuard, CanFormDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
