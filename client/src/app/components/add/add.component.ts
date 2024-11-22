import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-add-car-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgClass],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddCarComponent {
  addCarForm: FormGroup = new FormGroup({
    photo: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required]),
    model: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
  });

  constructor(private carService: CarService, private router: Router) {}

  submit() {
    if (this.addCarForm.valid) {
      const { photo, name, model, price } = this.addCarForm.value;

      const car = new Car(photo, name, model, price);

      this.carService.addCar(car).subscribe((data) => {
        this.router.navigate(['/auth/maintenance']);
      });
    }
  }
}
