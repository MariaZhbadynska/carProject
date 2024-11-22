import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../models/car';
import { Router, RouterLink } from '@angular/router';
import { MaintenanceListComponent } from '../maintenance-list/maintenance-list.component';

@Component({
  selector: 'app-maintenance-card',
  standalone: true,
  imports: [RouterLink, MaintenanceListComponent],
  templateUrl: './maintenance-card.component.html',
  styleUrl: './maintenance-card.component.css'
})
export class MaintenanceCardComponent {
  @Input() car!: Car
  @Output() onChanged = new EventEmitter<string>()


  constructor(
    private router: Router
  ){}
  onDelete(id: string) {
  
    this.onChanged.emit(id)
    this.router.navigate(['auth/maintenance'])

    
  }
}
