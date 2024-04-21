import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { UserReservationComponent } from './features/reservation-management/pages/user-reservation/user-reservation.component';
import { UserPageComponent } from './features/add-user/pages/user-page/user-page.component';
import { ReservationCalendarComponent } from './shared/components/reservation-calendar/reservation-calendar.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { MySpacesComponent } from './features/settings-page/my-spaces/my-spaces.component';
import { SettingsLayoutComponent } from './features/settings-page/layout/layout.component';
import { PersonalDetailsComponent } from './features/profile-page/personal-details/personal-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
      { path: 'reservations', component: ReservationCalendarComponent },
      { path: 'users', component: UserPageComponent },
      {
        path: 'settings',
        component: SettingsLayoutComponent,
        data: { submenu: 'settings' },
        children: [
          {
            path: '',
            redirectTo: 'my-spaces',
            pathMatch: 'full'
          },
          {
            path: 'my-spaces',
            component: MySpacesComponent
          },
          {
            path: 'availability',
            component: UserReservationComponent
          }
        ]
      },
      {
        path: 'profile',
        component: SettingsLayoutComponent,
        data: { submenu: 'profile' },
        children: [
          {
            path: '',
            redirectTo: 'details',
            pathMatch: 'full'
          },
          {
            path: 'details',
            component: PersonalDetailsComponent
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
export { routes };
console.log('Routes', routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
