import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { UserReservationComponent } from './features/reservation-management/pages/user-reservation/user-reservation.component';
import { UserPageComponent } from './features/add-user/pages/user-page/user-page.component';
import { ReservationCalendarComponent } from './shared/components/reservation-calendar/reservation-calendar.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home', component: LayoutComponent, 
  children:[ 
  { path: '', redirectTo: 'reservations', pathMatch: 'full' },
  {path: 'reservations', component: ReservationCalendarComponent},
  {path: 'users', component: UserPageComponent},
  {path: 'settings', component: UserReservationComponent},
  {path: 'profile', component: LayoutComponent}] },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
export {routes};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
