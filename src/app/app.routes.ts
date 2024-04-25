import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { UserReservationComponent } from './features/reservation-management/pages/user-reservation/user-reservation.component';
import { UserPageComponent } from './features/add-user/pages/user-page/user-page.component';
import { ReservationCalendarComponent } from './shared/components/reservation-calendar/reservation-calendar.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { AddSpaceModalComponent } from './features/admin-panel/components/add-space-modal/add-space-modal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
      { path: 'reservations', component: ReservationCalendarComponent },
      { path: 'users', component: UserPageComponent },
      { path: 'settings', component: UserReservationComponent },
      { path: 'profile', component: UserReservationComponent }], canActivate: [AuthGuard]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
  { path: 'auth/login', component: LoginComponent },
  {path: 'home', component: LandingPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'reservation', component: UserReservationComponent},
  {path: 'table', component: TableComponent},
  {path: 'calendar', component: ReservationCalendarComponent},
  {path: 'add-space-modal', component:AddSpaceModalComponent },
  // {path: 'new-reservation', component: ReservationComponent}, //commented until dashboard is ready
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
  
];
export { routes };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
