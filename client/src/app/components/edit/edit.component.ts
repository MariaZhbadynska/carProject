import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgClass, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../models/car';


@Component({
  selector: 'app-edit-car-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgClass],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditCarComponent implements OnInit {
  id: string = '';

  editCarForm: FormGroup = new FormGroup({
    photo: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required]),
    model: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),

  });

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.carService.getCarById(this.id).subscribe((car: Car) => {
      this.editCarForm = new FormGroup({
        photo: new FormControl(car.photo, Validators.required),
        name: new FormControl(car.name, [Validators.required]),
        model: new FormControl(car.model, Validators.required),
        price: new FormControl(car.price, Validators.required),
      });
    });
  }

  submit() {
    if (this.editCarForm.valid) {
      const {photo, name, model, price} = this.editCarForm.value;

      const car = new Car(photo, name, model, price);

      this.carService.editCar(this.id, car).subscribe((data) => {
        this.router.navigate(['/auth/maintenance']);
      });
    }
  }
}
