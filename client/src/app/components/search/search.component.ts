import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private carService: CarService) {}

  cars: Car[] = [];

  ngOnInit(): void {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  Search() {
    this.carService.searchCar(this.cars).subscribe((data) => {
      this.cars = data;
    });
  }
}
