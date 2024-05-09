import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { UserPageComponent } from './features/add-user/pages/user-page/user-page.component';
import { ReservationCalendarComponent } from './shared/components/reservation-calendar/reservation-calendar.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { MySpacesComponent } from './features/settings-page/my-spaces/my-spaces.component';
import { PersonalDetailsComponent } from './features/profile-page/personal-details/personal-details.component';
import { AvailabilityComponent } from './features/settings-page/availabilty/availability.component';
import { ChildLayoutComponent } from './shared/components/child-layout/child-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
      { path: 'reservations', component: ReservationCalendarComponent },
      { path: 'users', component: UserPageComponent },
      {
        path: 'settings',
        component: ChildLayoutComponent,
        data: { submenu: 'settings' },
        children: [
          {
            path: '',
            redirectTo: 'my-spaces',
            pathMatch: 'full',
          },
          {
            path: 'my-spaces',
            component: MySpacesComponent,
          },
          {
            path: 'availability',
            component: AvailabilityComponent,
          },
        ],
      },
      {
        path: 'profile',
        component: ChildLayoutComponent,
        data: { submenu: 'profile' },
        children: [
          {
            path: '',
            redirectTo: 'details',
            pathMatch: 'full',
          },
          {
            path: 'details',
            component: PersonalDetailsComponent,
          },
        ],
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
      { path: 'reservations', component: ReservationCalendarComponent },

      {
        path: 'profile',
        component: ChildLayoutComponent,
        data: { submenu: 'profile' },
        children: [
          {
            path: '',
            redirectTo: 'details',
            pathMatch: 'full',
          },
          {
            path: 'details',
            component: PersonalDetailsComponent,
          },
        ],
      },
    ],
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
export { routes };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
