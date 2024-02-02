import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {

  rooms = [
    {
      desks: Array(5)
        .fill({})
        .map((v, i) => ({ id: `desk-${i}`, available: true })),
    },
    {
      desks: Array(5)
        .fill({})
        .map((v, i) => ({ id: `desk-${i + 5}`, available: true })),
    },
  ];
  meetingRoom = { id: 'meeting-room', available: true };
  selectedSpace: any = null;
  reservation = {
    date: '', 
    startTime: '',
    endTime: '',
  };
  isAvailable = true;
  reservationId: string | null = null;

  constructor(private toastr: ToastrService, private reservationService: ReservationService) {}

  selectSpace(space: any) {
    this.selectedSpace = space;
    this.isAvailable = space.available;
  }

  submitReservation() {
    try {
      const startTimeISO = new Date(this.reservation.startTime).toISOString();
      const endTimeISO = new Date(this.reservation.endTime).toISOString();
  
      const reservationData = {
        startTime: startTimeISO,
        endTime: endTimeISO,
        userId: '6163888f-0853-4fd5-8105-3f3f742e9c90',
        deskId: 'cbdd9c79-6445-4d5e-ab3b-510a2f57a0ee', 
        action: 'BOOKED',
        createdBy: '6163888f-0853-4fd5-8105-3f3f742e9c90'
      };
  
      console.log('Sending reservation data:', reservationData);
  
      this.reservationService.submitReservation(reservationData).subscribe({
        next: (response) => {
          this.toastr.success('Reservation made', 'Success');
          this.resetForm();
        },
        error: (errorResponse) => {
          this.toastr.error('Error making reservation');
          console.error('Error response:', errorResponse);
          if (errorResponse.error && errorResponse.error.message) {
            console.error('Error details:', errorResponse.error.message);
          }
        }
      });
    } catch (error) {
      this.toastr.error('Invalid date or time provided');
      console.error('Error with date or time:', error);
    }
  }

  cancelReservation() {
    if (this.reservationId) {
      this.reservationService.deleteReservation(this.reservationId).subscribe({
        next: (response) => {
          this.toastr.success('Reservation cancelled', 'Success');
          this.resetForm();
        },
        error: (error) => this.toastr.error('Error cancelling reservation')
      });
    }
  }

  resetForm() {
    this.reservation = {
      date: '',
      startTime: '',
      endTime: '',
    };
    this.selectedSpace = null;
    this.reservationId = null;
  }
}