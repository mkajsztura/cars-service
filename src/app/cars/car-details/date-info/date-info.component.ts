import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'cs-date-info',
  templateUrl: './date-info.component.html',
  styleUrls: ['./date-info.component.less']
})
export class DateInfoComponent {

  car: Car;
  @Output() elapsedDays = new EventEmitter<number>();

  checkElapsedDays() {
    const elapsedMiliseconds =  +new Date() - +new Date(this.car.deliveryDate);
    this.elapsedDays.emit(elapsedMiliseconds / (1000 * 60 * 60 * 24));
  }

}
