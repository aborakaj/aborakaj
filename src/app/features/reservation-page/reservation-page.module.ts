import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminReservationComponent } from './pages/admin-reservation/admin-reservation.component';
import { ReservationModalComponent } from './components/reservation-modal/reservation-modal.component';
import { UserReservationComponent } from './pages/user-reservation/user-reservation.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AdminReservationComponent,
    ReservationModalComponent,
    UserReservationComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    AdminReservationComponent,
    ReservationModalComponent,
    UserReservationComponent,
  ],
})
export class ReservationPageModule {}
