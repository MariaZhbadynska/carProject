import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgClass, NgIf } from '@angular/common';

import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgClass, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required), 
  });


  constructor(
    private userService: UserService,
    private router: Router
    ) {}

  submit() {


    if(this.loginForm.valid) {
      let {email, password} = this.loginForm.value

      let user = new User(email, password)

      this.userService.login(user).subscribe({
        next: () => {
          this.router.navigate(['/auth/home'])
        },
        error: (err) => {
          alert(err)
        }
      })

    }



  }
}