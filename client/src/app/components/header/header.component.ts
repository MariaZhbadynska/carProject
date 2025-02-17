import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router){}
logout(){
this.userService.logout().subscribe(() => {
this.router.navigate(['/login'])
})
}
}
