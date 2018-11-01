import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent implements OnChanges{
  @Input() totalCost: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private VAT = 1.23;

  showGross(): void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }
// ngOnChanges to show previous and curreny values
  ngOnChanges(changes: SimpleChanges) {
    console.log('currentValue', changes['totalCost'].currentValue);
    console.log('previousValue', changes['totalCost'].previousValue);
    console.log('isFirstChange', changes['totalCost'].isFirstChange());
  }
}
