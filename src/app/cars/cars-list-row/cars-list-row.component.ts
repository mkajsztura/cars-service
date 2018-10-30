import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: '[cs-cars-list-row]',
  templateUrl: './cars-list-row.component.html'
})
export class CarsListRowComponent {
  
  @Input() car: Car;
  @Output() removedCar = new EventEmitter();
  
  public removeCar(car, event) {
    event.stopPropagation();
    this.removedCar.emit(car);
  }

}
