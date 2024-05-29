import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CalendarControlComponent } from '../shared/components/calendar-control/calendar-control.component';
import { ReservationCalendarComponent } from '../shared/components/reservation-calendar/reservation-calendar.component';
import { AvailabilityComponent } from './admin-panel/pages/settings-page/availabilty/availability.component';
import { MySpacesComponent } from './admin-panel/pages/settings-page/my-spaces/my-spaces.component';
import { RegisterComponent } from './register-page/register.component';
import { UserManagementModule } from './admin-panel/pages/user-management/user-management.module';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { ReservationPageModule } from './reservation-page/reservation-page.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { UserDashboardModule } from './user-panel/user-panel.module';

@NgModule({
  declarations: [
    CalendarControlComponent,
    ReservationCalendarComponent,
    RegisterComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserManagementModule,
    ProfilePageModule,
    ReservationPageModule,
    AdminPanelModule,
    UserDashboardModule
  ],
})
export class FeaturesModule {}
