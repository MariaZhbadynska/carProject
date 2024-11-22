import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MaintenanceDetailsComponent } from './components/maintenance-details/maintenance-details.component';
import { authGuard } from './guards/auth.guard';
import { AddCarComponent } from './components/add/add.component';
import { EditCarComponent } from './components/edit/edit.component';

export const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    {
        path: 'auth', component: AuthPageComponent,
        canActivate: [authGuard],
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'car-edit/:id', component: EditCarComponent},
            { path: 'car-details/:id', component: MaintenanceDetailsComponent },
            { path: 'car-add', component: AddCarComponent},
            { path: 'maintenance', component: MaintenanceComponent},

            { path: 'favourites', component: FavouritesComponent },
        ]
    },
    { path: '**', component: NotFoundPageComponent },
];