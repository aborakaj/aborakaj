import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login-page/login.component';
import { UserPageComponent } from './features/admin-panel/pages/user-management/pages/user-page/user-page.component';
import { ReservationCalendarComponent } from './shared/components/reservation-calendar/reservation-calendar.component';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { MySpacesComponent } from './features/admin-panel/pages/settings-page/my-spaces/my-spaces.component';
import { PersonalDetailsComponent } from './features/profile-page/personal-details/personal-details.component';
import { AvailabilityComponent } from './features/admin-panel/pages/settings-page/availabilty/availability.component';
import { ChildLayoutComponent } from './shared/components/child-layout/child-layout.component';
import { RegisterComponent } from './features/register-page/register.component';
import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';
import { AddSpaceModalComponent } from './features/admin-panel/components/add-space-modal/add-space-modal.component';
import { UserPanelComponent } from './features/user-panel/user-panel.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home/admin',
    component: AdminPanelComponent,
    children: [
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
      { path: 'reservations', component: ReservationCalendarComponent },
      { path: 'users', component: UserPageComponent },
      { path: 'space', component: AddSpaceModalComponent },
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
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: UserPanelComponent,
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
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
export { routes };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}