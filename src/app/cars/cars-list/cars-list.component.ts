import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

import { Car } from '../models/car';
import { Client } from '../models/client';
import { TotalCostComponent } from '../total-cost/total-cost.component';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild("totalCostRef") totalCostRef : TotalCostComponent; //refenercja do komponentu TotalCost poprzez ViewChild
  totalCost: number;
  grossCost: number;
  cars: Car[] = [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'Mercedes 124',
      plate: 'KRK2200',
      deliveryDate: '24-05-2017',
      deadline: '03-06-2016',
      client: {
        firstName: 'Micha³',
        surname: 'Nowak'
      },
      cost: 1200,
      isFullyDamaged: true
    },
    {
      id: 3,
      model: 'Renault CLIO',
      plate: 'GWE22011',
      deliveryDate: '02-02-2017',
      deadline: '03-03-2017',
      client: {
        firstName: 'Beata',
        surname: 'Dampc'
      },
      cost: 2800,
      isFullyDamaged: true
    }
  ]
  constructor() { }

  ngOnInit() {
    this.countTotalCost();
  }
  ngAfterViewInit() {
    this.totalCostRef.showGross(); //użycie metody showGross z komponentu-dziecka total-costs OD RAZU
  }
  // showGross() : void{
  //   this.totalCostRef.showGross(); //użycie metody showGross z komponentu-dziecka total-costs przez BUTTON
  // }
  countTotalCost() : void {
    this.totalCost = this.cars
    .map((car) => car.cost)
    .reduce(function(result, current){
      result+=current;
      return result;
    },0);
  }
  onShownGross(e : number) : void { // przypisuje do wartości pola grossCost wartość przesłaną z emittera
    this.grossCost = e;
  }
}
