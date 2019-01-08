import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { FormBuilder, FormGroup, FormArray,Validators } from '@angular/forms';
import { DateInfoComponent } from './date-info/date-info.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  // ViewChild domyślnie zwraca element typu ElementRef,
  // obiekt read zmienia typ odczytu ViewChild
  @ViewChild('dateInfoContainer', {read: ViewContainerRef}) dateInfoContainer: ViewContainerRef; // kontener na komponent dynamiczny
  car: Car;
  carForm: FormGroup;
  elapsedDays: number;
  dateInfoComponentRef: ComponentRef<DateInfoComponent>;

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private cfr: ComponentFactoryResolver // "magazyn dynamicznych komponentów", może wystawić dynamiczny komponent
              ) { }

  ngOnInit() {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    let parts = this.car.parts.map((part) => {
      return this.formBuilder.group(part);
    })

    console.log(parts, 'parts')
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
      isFullyDamaged: this.car.isFullyDamaged,
      year: this.car.year,
      parts: this.formBuilder.array(parts)
    });
  }

  updateCar(): void {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
      // funkcja wyykona się jeśli metoda została wywołana poprawnie
      this.router.navigate(['/cars']);
    });
  }

  loadCar() {
  this.car = this.route.snapshot.data['car']; // to jest car dla resolvera, który dostarcza dane po wejściu na path'cars/:id'
  }

  buildParts() {
    return this.formBuilder.group({
      name: '',
      price: '',
      isStock: ''
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

  createDateInfoComponent () { // tworzenie dynamicznego komoponentu
    if (this.dateInfoContainer.get(0) !== null) {
      return; // blokada jezeli istnieje już instancja komponentu w kontenerze DateInfoContainer
    }


    const dateInfoFactory = this.cfr.resolveComponentFactory(DateInfoComponent); // komponent wystawiony przez fabrykę

    this.dateInfoComponentRef = this.dateInfoContainer
      .createComponent(dateInfoFactory); // przekazanie komponentu dynamicznego do dateInfoContainera

    // tslint:disable-next-line:max-line-length
    this.dateInfoComponentRef.instance.car = this.car; // przekazanie this.car do instacji komponentu dynamicznego (nie jest to klasyk input)
    this.dateInfoComponentRef.instance.elapsedDays.subscribe((elapsedDays) => { // odbiór danych od komponentu dynamicznego
      this.elapsedDays = Math.floor(elapsedDays);
    });
  }

  destroyComponent() { // usuwanie dynamicznego komponentu,
    this.dateInfoComponentRef.destroy();
  }
}
