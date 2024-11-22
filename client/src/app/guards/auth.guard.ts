import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../components/services/user.service';



export const authGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService)
  const router = inject(Router)

  if(!userService.isAuthenticated) {
    router.navigate(['/login'])
    return false;
  }

  return true;
};
