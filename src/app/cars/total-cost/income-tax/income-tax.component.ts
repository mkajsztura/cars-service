import { Component, OnInit, OnDestroy } from '@angular/core';
import { CostSharedService } from '../../cost-shared.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cs-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.less']
})
export class IncomeTaxComponent implements OnInit, OnDestroy {
  incomeTax = 23;
  incomeTaxCost: number;
  costSubscription: Subscription;

  constructor( private costShareService: CostSharedService ) { }

  ngOnInit() {
    this.costSubscription = this.costShareService.sharedCostSource$.subscribe((cost) => {
      this.incomeTaxCost = cost * this.incomeTax / 100;
    });
  }

  ngOnDestroy() {
    this.costSubscription.unsubscribe();
  }

}
