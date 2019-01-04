import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LayoutService {

  layoutVisibleSource$ = new Subject<boolean>();

  showSidebar() {
    this.layoutVisibleSource$.next(true);
  }

  hideSidebar() {
    this.layoutVisibleSource$.next(false);
  }

}
