import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: ' cars-list ',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild(' totalCostRef ' ) totalCostRef: TotalCostComponent; // refenercja do komponentu TotalCost poprzez ViewChild
  totalCost: number;
  grossCost: number;
  cars: Car[];

  constructor( private carsService: CarsService,
              private router: Router) { }

  ngOnInit() {
    this.loadCars();
  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
     this.cars = cars;
    this.countTotalCost();
    });
  }
  // routing z poziomu klasy komponentu, z użyciem serwisu Routing
  goToDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }
  ngAfterViewInit() {
    // this.totalCostRef.showGross(); //użycie metody showGross z komponentu-dziecka total-costs OD RAZU
  }
  showGross(): void {
    this.totalCostRef.showGross(); // użycie metody showGross z komponentu-dziecka total-costs przez BUTTON
  }
  countTotalCost(): void {
    this.totalCost = this.cars
    .map((car) => car.cost)
    .reduce(function(result, current) {
      result += current;
      return result;
    }, 0);
  }
  onShownGross(e: number): void { // przypisuje do wartości pola grossCost wartość przesłaną z emittera
    this.grossCost = e;
  }
}
