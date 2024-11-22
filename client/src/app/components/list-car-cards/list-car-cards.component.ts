import { Component, OnInit } from '@angular/core';
import { CarCardComponent } from '../car-card/car-card.component';

import { NgFor } from '@angular/common';

import { CarService } from '../services/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-list-car-cards',
  standalone: true,
  imports: [CarCardComponent, NgFor],
  templateUrl: './list-car-cards.component.html',
  styleUrls: ['./list-car-cards.component.css'],
})
export class ListCarCardsComponent  {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }
}
