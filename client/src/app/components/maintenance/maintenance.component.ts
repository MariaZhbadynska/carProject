import { Component } from '@angular/core';
import { MaintenanceListComponent } from '../maintenance-list/maintenance-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [MaintenanceListComponent, RouterOutlet, RouterLink],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

}
