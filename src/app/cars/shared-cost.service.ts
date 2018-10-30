import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedCostService {

  public totalCostSource$ = new Subject<number>()

  public setTotalCost = (cost) => {
    this.totalCostSource$.next(cost);
  }
}
