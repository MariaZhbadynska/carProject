import { Component } from "@angular/core";
import { Car } from "../models/car";
import { FavService } from "../services/fav.service";
import { NgFor } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-favourites',
  imports: [NgFor, RouterLink],
  standalone: true,
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {

  favourites: Car[] = [];

  constructor(private favService: FavService) {}

  ngOnInit() {
    this.loadFavourites();
  }

  loadFavourites() {
    this.favService.getFavs().subscribe((favs: Car[]) => {
      this.favourites = favs;
    });
  }

  removeProduct(id: string) {
    this.favService.deleteFavP(id).subscribe(() => {
      this.favourites = this.favourites.filter(c => c._id != id)
    }
  )}
}

