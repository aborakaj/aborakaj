import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Desk, DeskService } from '../../../../core/services/desk.service';
import {
  Reservation,
  ReservationService,
} from '../../../../core/services/reservation.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Room, RoomService } from '../../../../core/services/room.service';

@Component({
  selector: 'app-user-reservation',
  templateUrl: './user-reservation.component.html',
  styleUrls: ['./user-reservation.component.scss'],
})
export class UserReservationComponent implements OnInit {
  isDisplayModal: boolean = false;
  selectedDesk: Desk | null = null;
  isDeskReserved: boolean = false; 
  currentReservationId: string | null = null;

  reservation = {
    startTime: '',
    endTime: '',
    action: 'BOOKED',
  };

  desks: Desk[] = [];
  rooms: Room[] = [];
  reservations: Reservation[] = [];

  constructor(
    private toastr: ToastrService,
    private reservationService: ReservationService,
    private deskService: DeskService,
    private roomService: RoomService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchDesks();
    this.fetchRooms();
  }

  fetchDesks() {
    this.deskService.getDesks().subscribe({
      next: (desks) => {
        this.desks = desks;
      },
      error: (error) => {
        this.toastr.error('Error fetching desks');
      },
    });
  }

  fetchRooms() {
    this.roomService.getRooms().subscribe({
      next: (rooms) => {
        this.rooms = rooms;
      },
      error: (error) => {
        this.toastr.error('Error fetching rooms');
      },
    });
  }

  // fetchReservations() {
  //   this.reservationService.getReservation().subscribe({
  //     next: (reservationsData) => {
  //       this.reservations = reservationsData;
  //     },
  //     error: (error) => {
  //       this.toastr.error('Error fetching reservations');
  //     },
  //   });
  // }

  showReservationModal(desk: Desk) {
    this.selectedDesk = desk;
    this.isDisplayModal = true;

    this.selectDesk(desk);
  }

  selectDesk(desk: Desk) {
    const reservation = this.reservations.find(
      (res) =>
        res.deskId === desk.id &&
        res.userId === this.authService.getUserIdFromToken()
    );
    this.isDeskReserved = !!reservation;
  
    if (this.isDeskReserved && reservation) {
      this.reservation = {
        startTime: reservation.startTime,
        endTime: reservation.endTime,
        action: 'BOOKED',
      };
      this.currentReservationId = reservation.id; 
    } else {
      this.currentReservationId = null;
    }
  }

  submitReservation(receivedReservationData: Partial<Reservation>) {
    const userId = this.authService.getUserIdFromToken();
    if (!userId) {
      this.toastr.error('User not authenticated');
      return;
    }

    if (!this.selectedDesk) {
      this.toastr.error('No desk selected');
      return;
    }

    const startTimeISO = new Date(receivedReservationData.startTime || this.reservation.startTime).toISOString();
    const endTimeISO = new Date(receivedReservationData.endTime || this.reservation.endTime).toISOString();

    const reservationData = {
      startTime: startTimeISO,
      endTime: endTimeISO,
      userId: userId,
      deskId: this.selectedDesk.id,
      action: this.reservation.action,
      createdBy: userId,
    };

    this.reservationService.submitReservation(reservationData).subscribe({
      next: () => {
        this.toastr.success('Reservation made', 'Success');
        this.onModalClose();
      },
      error: (errorResponse) => {
        this.toastr.error('Error making reservation');
        if (errorResponse.error && errorResponse.error.message) {
        }
      },
    });
  }

  cancelReservation() {
    if (this.currentReservationId) {
      this.reservationService.deleteReservation(this.currentReservationId).subscribe({
        next: () => {
          this.toastr.success('Reservation cancelled', 'Success');
          this.isDisplayModal = false; 
        },
        error: (error) => this.toastr.error('Error cancelling reservation'),
      });
    }
  }

  resetForm() {
    this.reservation = {
      startTime: '',
      endTime: '',
      action: 'BOOKED',
    };
    this.currentReservationId = null;
  }

  onModalClose() {
    this.resetForm();
    this.isDisplayModal = false;
  }
  
}
