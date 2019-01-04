import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CostSharedService } from '../cost-shared.service';
import { CsValidators } from '../../shared-module/validators/cs-validators';
import { CanDeactivateComponent } from '../../guards/form-can-deactivate.guard';

@Component({
  // tslint:disable-next-line:component-selector
  selector: ' cars-list ',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class CarsListComponent implements OnInit, AfterViewInit, CanDeactivateComponent {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent; // refenercja do komponentu TotalCost poprzez ViewChild
  totalCost: number;
  grossCost: number;
  cars: Car[];
  carForm: FormGroup;

  constructor( private carsService: CarsService,
              private router: Router,
              private formBuilder: FormBuilder,
              private costShareService: CostSharedService) { }

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
      power: ['', CsValidators.power],
      clientFirstName: '',
      clientSurname: '',
      isFullyDamaged: '',
      year: '',
      parts: this.formBuilder.array([])
    });
  }

  buildParts() {
    return this.formBuilder.group({
      name: '',
      price: '',
      isAvailable: ''
    })
  }

  get parts (): FormArray {
    return <FormArray>this.carForm.get('parts');
  }

  addPart (): void {
    this.parts.push(this.buildParts());
  }

  removePart(index: number): void {
    this.parts.removeAt(index);
  }

  countPartsCost(parts) {
    return parts.reduce((result, current) => {
      return parseFloat(result) + parseFloat(current.price);
    }, 0);
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
    let carFormData = Object.assign({}, this.carForm.value);
    carFormData.cost = this.countPartsCost(carFormData.parts)
    this.carsService.addCar(carFormData).subscribe(() => {
      // funkcja wyykona się jeśli metoda została wywołana poprawnie
      this.loadCars();
    });
  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
    this.cars = cars;
    this.countTotalCost();
    this.costShareService.updateCost(this.totalCost);
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
  onRemovedCar(car: Car): void {
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    });
  }

  canDeactivate() {
    if (!this.carForm.dirty) {
      return true;
    }

    return window.confirm('Discard changes?');
  }
}
