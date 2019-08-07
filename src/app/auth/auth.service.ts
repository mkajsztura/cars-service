import { Injectable } from '@angular/core';
import { LayoutService } from '../shared/services/layout.service';

@Injectable()
export class AuthService {

  constructor(
    private layoutService: LayoutService
  ) { }
  // fake credentials
  private credentials = {
    login: 'admin',
    password: 'admin'
  };

  private isUserLoggedIn = false;

  login(login, password) {
    return new Promise((resolve, reject) => {
      if (login === this.credentials.login && password === this.credentials.password) {
        this.isUserLoggedIn = true;
        resolve();
      } else {
        reject();
      }
    });
  }

  logout() {
    this.isUserLoggedIn = false;
    this.layoutService.hideSidebar();
  }

  isLoggedIn() {
    return this.isUserLoggedIn;
  }
}
