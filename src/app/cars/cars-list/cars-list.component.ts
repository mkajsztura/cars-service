import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedCostService } from '../shared-cost.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: ' cars-list ',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent; // refenercja do komponentu TotalCost poprzez ViewChild
  totalCost: number;
  grossCost: number;
  cars: Car[];
  carForm: FormGroup;

  constructor( private carsService: CarsService,
              private sharedCostService: SharedCostService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }
  buildCarForm() {
    return this.formBuilder.group( {
      model: ['', Validators.required],
      type: '',
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: '',
      deadline: '',
      color: '',
      power: '',
      clientFirstName: '',
      clientSurname: '',
      cost: '',
      isFullyDamaged: '',
      year: ''
    });
  }

  togglePlateValidity () { // walidacja warunkowa, jeżeli zaznaczone jest fullyDamaged, zdjęcie walidaci z pola plate
    const damageControl = this.carForm.get('isFullyDamaged');
    const plateControl = this.carForm.get('plate');

    if (damageControl.value) {
      plateControl.clearValidators();
    } else {
      plateControl.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(7)]);
    }

    plateControl.updateValueAndValidity();
  }

  addCar(): void {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      // funkcja wyykona się jeśli metoda została wywołana poprawnie
      this.loadCars();
    });
  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
    this.cars = cars;
    this.countTotalCost();
    this.sharedCostService.setTotalCost(this.totalCost)
    });
  }
  // routing z poziomu klasy komponentu, z użyciem serwisu Routing
  goToDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }
  ngAfterViewInit() {
    // this.totalCostRef.showGross(); // użycie metody showGross z komponentu-dziecka total-costs OD RAZU
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
  removeCar(car: Car, event): void {
    event.stopPropagation();
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    });
  }
}
