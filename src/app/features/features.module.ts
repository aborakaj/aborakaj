import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { UserPageComponent } from './add-user/pages/user-page/user-page.component';
import { AddUserComponent } from './add-user/components/add-user.component';
import { PersonalDetailsComponent } from './profile-page/personal-details/personal-details.component';
import { ReservationComponent } from './reservation-management/components/reservation/reservation.component';
import { ReservationModalComponent } from './reservation-management/components/reservation-modal/reservation-modal.component';
import { UserReservationComponent } from './reservation-management/pages/user-reservation/user-reservation.component';
import { AvailabilityComponent } from './settings-page/pages/availabilty/availability.component';
import { MySpacesComponent } from './settings-page/pages/my-spaces/my-spaces.component';
import { CalendarControlComponent } from './calendar-control/calendar-control.component';
import { ReservationCalendarComponent } from './reservation-calendar/reservation-calendar.component';


@NgModule({
  declarations: [UserPageComponent,
    AddUserComponent,
    PersonalDetailsComponent,
    ReservationComponent,
    ReservationModalComponent,
    UserReservationComponent,
    AvailabilityComponent,
    MySpacesComponent,
    CalendarControlComponent,
    ReservationCalendarComponent
  ],
  imports: [SharedModule, CommonModule]
})
export class FeaturesModule { }
