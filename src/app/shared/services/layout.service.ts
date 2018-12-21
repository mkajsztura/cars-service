import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LayoutService {

  layoutVisibleSource$ = new Subject<boolean>();

  showLayout() {
    this.layoutVisibleSource$.next(true);
  }

  hideLayout() {
    this.layoutVisibleSource$.next(false);
  }

}
