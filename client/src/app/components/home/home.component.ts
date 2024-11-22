import { Component } from '@angular/core';
import { ListCarCardsComponent } from '../list-car-cards/list-car-cards.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListCarCardsComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
