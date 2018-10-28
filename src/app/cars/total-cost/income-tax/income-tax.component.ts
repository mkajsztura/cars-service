import { Component, OnInit } from '@angular/core';
import { SharedCostService } from '../../shared-cost.service';

@Component({
  selector: 'cs-income-tax',
  templateUrl: './income-tax.component.html'
})
export class IncomeTaxComponent implements OnInit {

  private incomeTax: number;
  private VAT = 0.23;

  constructor(
    private sharedCostService: SharedCostService
  ) { }

  ngOnInit() {
    this.sharedCostService.totalCostSource$.subscribe((tax)=> {
      this.incomeTax = tax * this.VAT;
    })
  }

}
