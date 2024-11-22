import { Component, Input } from '@angular/core';
import { FavService } from '../services/fav.service';
import { Car } from '../models/car';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-card',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  @Input() car!: Car;
 

  constructor(private favService: FavService, private router: Router) { }
  
  addCarToFav() {
    this.favService.getFavs().subscribe((favs: Car[]) => {
      const exists = favs.some(fav => fav._id === this.car._id); 

      if (exists) {
        alert('Товар вже є у списку!');
      } else {
        this.favService.pushFav(this.car).subscribe(() => {});
        this.router.navigate(['auth/favourites'])
      }
    });
  }
}

