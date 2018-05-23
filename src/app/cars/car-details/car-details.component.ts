import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  carForm: FormGroup;

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit() {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group( {
      model: [this.car.model, Validators.required],
      type: this.car.type,
      plate: [this.car.plate, [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: this.car.deliveryDate,
      deadline: this.car.deadline,
      color: this.car.color,
      power: this.car.power,
      clientFirstName: this.car.clientFirstName,
      clientSurname: this.car.clientSurname,
      cost: this.car.cost,
      isFullyDamaged: this.car.isFullyDamaged,
      year: this.car.year
    });
  }

  updateCar(): void {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
      // funkcja wyykona się jeśli metoda została wywołana poprawnie
      this.router.navigate(['/cars']);
    });
  }

  loadCar() {
  this.car = this.route.snapshot.data['car'];




  //   const id = +this.route.snapshot.params['id'];
  //   console.log('Przed serwisem car' + this.car);
  //   console.log('Przed serwisem id' + id);
  //   const wynik = this.carsService.getCar(id).subscribe((car) => {
  //     console.log(1,car);
  //     this.car = car;
  //     console.log(2,this.car);
  //     this.carForm = this.buildCarForm();

  //   });
  //   console.log("koniec", this.car);
  // }
}
}
