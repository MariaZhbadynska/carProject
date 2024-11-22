import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgClass, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'] 
})
export class RegisterFormComponent {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  submit() {
    if (this.registerForm.valid) {
      let { email, password, name } = this.registerForm.value;

      let user = new User(email, password, name);  

      this.userService.register(user).subscribe({
        next: () => {
          this.router.navigate(['/auth/home']); 
        },
        error: (err) => {
          alert(err);
        }
      });
    }
  }
}
