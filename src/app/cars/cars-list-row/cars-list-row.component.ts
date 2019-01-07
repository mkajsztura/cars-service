import { Component, Input, Output, EventEmitter, HostBinding, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: '[cs-cars-list-row]', // nawiasy [] pozwalają użyć selektora komponentu jako atrubytu na tagu html
  templateUrl: './cars-list-row.component.html'
})
export class CarsListRowComponent implements OnInit{

  @Input() car: Car;
  @Output() removedCar = new EventEmitter();
  // tslint:disable-next-line:max-line-length
  @HostBinding('class.after-deadline') deadline = false; // steruje czy podpiąć klasę (komponent sam decyduje o tym - zamiast użycia [ngClass] w nadrzędnym komponencie)

  public removeCar(car, event) {
    event.stopPropagation();
    this.removedCar.emit(car);
  }

  ngOnInit() {
  new Date(this.car.deadline) < new Date() ? this.deadline = true : this.deadline = false;
  }

}
