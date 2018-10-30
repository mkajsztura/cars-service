import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CostSharedService {
  private tax = 18;

  // subject umożliwia produkowanie wartości i subskybcję, tworzy strumień pod który można się subskrybować i emitować dane
  public sharedCostSource$ = new Subject<number>();

  public updateCost(cost: number) {
    this.sharedCostSource$.next(cost);
  }
}
