import { Component } from '@angular/core';
import { MaintenanceCardComponent } from '../maintenance-card/maintenance-card.component';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-maintenance-list',
  standalone: true,
  imports: [MaintenanceCardComponent, NgFor],
  templateUrl: './maintenance-list.component.html',
  styleUrl: './maintenance-list.component.css'
})
export class MaintenanceListComponent {



  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  onCarDelete(id: string) {
    this.carService.deleteCar(id).subscribe(() => {
      this.cars = this.cars.filter(c => c._id != id)
    })

  }

}
