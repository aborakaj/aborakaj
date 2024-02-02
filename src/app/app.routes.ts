import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'new-reservation', component: ReservationComponent },
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, //commentet for testing purposes
  { path: '**', redirectTo: 'auth/login' },
  
];
export {routes};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
