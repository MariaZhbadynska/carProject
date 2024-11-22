import { Component, Input } from '@angular/core';
import { Car } from '../models/car';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-maintenance-details',
  standalone: true,
  imports: [],
  templateUrl: './maintenance-details.component.html',
  styleUrl: './maintenance-details.component.css'
})
export class MaintenanceDetailsComponent {
 car: Car = new Car('','','',0)

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
    ) {}


    ngOnInit() {
      let id = this.route.snapshot.params['id'];
  
      this.carService.getCarById(id).subscribe((car: Car) => {
        this.car = car
      })
     
  
    }

  back() {
    this.location.back()
  }

}
