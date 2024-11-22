import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  testEmail: string = 'test@gmail.com';
  testPassword: string = '123';
  isAuthenticated: boolean = false;

  login(user: User) {
    if (user.email == this.testEmail && user.password == this.testPassword) {
      this.isAuthenticated = true;
      return of({}).pipe(delay(2000));
    }

    return throwError("Invalid error or password")
  }

  register(user: User) {
    this.isAuthenticated = true
    console.log(user);
    return of({})
  }

  logout() {
    this.isAuthenticated = false;
    return of({})
  }
}
