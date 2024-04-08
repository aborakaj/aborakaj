import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { ReservationComponent } from './features/reservation-management/components/reservation/reservation.component';
import { UserReservationComponent } from './features/reservation-management/pages/user-reservation/user-reservation.component';
import { ReservationCalendarComponent } from './shared/components/reservation-calendar/reservation-calendar.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  {path: 'home', component: LandingPageComponent},
  {path: 'reservation', component: UserReservationComponent},
  {path: 'calendar', component: ReservationCalendarComponent},
  // {path: 'new-reservation', component: ReservationComponent}, //commented until dashboard is ready
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
  
];
export {routes};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}