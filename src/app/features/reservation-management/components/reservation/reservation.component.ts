import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from '../../../../core/services/room.service';
import { UserService } from '../../../../core/services/user.service';
import { DeskService } from '../../../../core/services/desk.service';
import { Reservation } from '../../../../core/models/reservation.interface';
import { ReservationService } from '../../../../core/services/reservation/reservation.service';
import { Desk } from '../../../../core/models/desk.interface';
import { Room } from '../../../../core/models/room.interface';
import { User } from '../../../../core/models/user.interface';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent {
  selectedSpace: any = null;
  reservation = {
    date: '',
    startTime: '',
    endTime: '',
  };
  isAvailable = true;

  reservationId: string | null = null;
  selectedSpaceId: string | null = null;
  selectedUserId: string | null = null;

  rooms: Room[] = [];
  users: User[] = [];
  desks: Desk[] = [];

  reservations: Reservation[] = [];
  editingReservation: any = null;

  constructor(
    private toastr: ToastrService,
    private reservationService: ReservationService,
    private userService: UserService,
    private deskService: DeskService,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    this.fetchUsers();
    this.fetchRooms();
    this.fetchDesks();
    this.fetchReservations();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        this.toastr.error('Error fetching users');
      },
    });
  }

  fetchDesks() {
    this.deskService.getDesks().subscribe({
      next: (desks) => {
        this.desks = desks;
      },
      error: (error) => {
        this.toastr.error('Error fetching users');
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

  fetchReservations() {
    this.reservationService.getReservation().subscribe({
      next: (reservationsData) => {
        this.reservations = reservationsData;
      },
      error: (error) => {
        this.toastr.error('Error fetching reservations');
      },
    });
  }

  selectSpace(space: any) {
    this.selectedSpace = space;
    this.isAvailable = space.status === 'available';
    this.selectedSpaceId = space.id;
  }

  submitReservation() {
    if (!this.selectedUserId || !this.selectedSpaceId) {
      this.toastr.error('Please select a desk and a user!');
      return;
    }

    const startTimeISO = new Date(this.reservation.startTime).toISOString();
    const endTimeISO = new Date(this.reservation.endTime).toISOString();

    const reservationData = {
      startTime: startTimeISO,
      endTime: endTimeISO,
      userId: this.selectedUserId,
      deskId: this.selectedSpaceId,
      action: 'BOOKED',
      createdBy: this.selectedUserId,
    };

    this.reservationService.submitReservation(reservationData).subscribe({
      next: (response) => {
        this.toastr.success('Reservation made', 'Success');
        this.resetForm();
      },
      error: (errorResponse) => {
        this.toastr.error('Error making reservation');
        if (errorResponse.error && errorResponse.error.message) {
        }
      },
    });
  }

  cancelReservation() {
    if (this.reservationId) {
      this.reservationService.deleteReservation(this.reservationId).subscribe({
        next: (response) => {
          this.toastr.success('Reservation cancelled', 'Success');
          this.resetForm();
        },
        error: (error) => this.toastr.error('Error cancelling reservation'),
      });
    }
  }

  startEditReservation(reservation: Reservation) {
    this.editingReservation = { ...reservation };
  }

  submitEditReservation() {
    const updatedReservationData = {
      startTime: new Date(this.editingReservation.startTime).toISOString(),
      endTime: new Date(this.editingReservation.endTime).toISOString(),
    };
    this.reservationService
      .updateReservation(this.editingReservation.id, updatedReservationData)
      .subscribe({
        next: (response) => {
          this.toastr.success('Reservation updated', 'Success');
          this.fetchReservations();
          this.editingReservation = null;
        },
        error: (errorResponse) => {
          this.toastr.error('Error updating reservation');
          if (errorResponse.error && errorResponse.error.message) {
          }
        },
      });
  }

  deleteReservation(reservationId: string) {
    this.reservationService.deleteReservation(reservationId).subscribe({
      next: (response) => {
        this.toastr.success('Reservation deleted', 'Success');
        this.fetchReservations();
      },
      error: (error) => this.toastr.error('Error cancelling reservation'),
    });
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

