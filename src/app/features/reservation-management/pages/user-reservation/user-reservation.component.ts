import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DeskService } from '../../../../core/services/desk.service';
import { ReservationService } from '../../../../core/services/reservation/reservation.service';
import { AuthService } from '../../../../core/services/auth.service';
import { RoomService } from '../../../../core/services/room.service';
import { Reservation } from '../../../../core/models/reservation.interface';
import { Desk } from '../../../../core/models/desk.interface';
import { Room } from '../../../../core/models/room.interface';

@Component({
  selector: 'app-user-reservation',
  templateUrl: './user-reservation.component.html',
  styleUrls: ['./user-reservation.component.scss'],
})
export class UserReservationComponent implements OnInit {
  userName = 'Xhulio Gazidede';
  userEmail = 'xhgazidede@ritech.co';

  visible: boolean = false;
  selectedDesk: Desk | null = null;
  isDeskReserved: boolean = false;
  currentReservationId: string | null = null;
  selectedDate!: string;

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
    private authService: AuthService,
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

  fetchReservations() {
    const userId = this.authService.getUserIdFromToken();
    this.reservationService.getReservation().subscribe({
      next: (reservationsData) => {
        this.reservations = reservationsData.filter(
          (res: Reservation) => res.userId === userId
        );
      },
      error: (error) => {
        this.toastr.error('Error fetching reservations');
      },
    });
  }

  onDeskClicked(desk: Desk) {
    this.changeVisibility(true);
    this.selectedDesk = desk;
    this.getCurrentReservation(desk);
  }

  onDateSelect(date: any) {
    this.selectedDate =
      date instanceof Date ? date.toISOString().split('T')[0] : date;
  }


  getCurrentReservation(desk: Desk) {
    const reservation = this.reservations.find(
      (res) =>
        res.deskId === desk.id &&
        res.userId === this.authService.getUserIdFromToken()
    );
    this.isDeskReserved = !!reservation;

    if (this.isDeskReserved && reservation) {
      this.currentReservationId = reservation.id;
    } else {
      this.currentReservationId = null;
      this.resetForm();
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

    if (
      !receivedReservationData.startTime ||
      !receivedReservationData.endTime
    ) {
      this.toastr.error('Start time and end time are required');
      return;
    }

    const combinedStartTime = `${this.selectedDate}T${receivedReservationData.startTime}`;
    const combinedEndTime = `${this.selectedDate}T${receivedReservationData.endTime}`;

    const formattedStartTime = new Date(combinedStartTime).toISOString();
    const formattedEndTime = new Date(combinedEndTime).toISOString();

    const reservationData = {
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      userId: userId,
      deskId: this.selectedDesk.id,
      action: this.reservation.action,
      createdBy: userId,
    };

    this.reservationService.submitReservation(reservationData).subscribe({
      next: () => {
        this.toastr.success('Reservation made', 'Success');
        this.changeVisibility(false);
        this.resetForm();
      },
      error: (errorResponse) => {
        this.toastr.error('Error making reservation');
      },
    });
  }

  resetForm() {
    this.reservation = {
      startTime: '',
      endTime: '',
      action: 'BOOKED',
    };
    this.currentReservationId = null;
  }

  changeVisibility(value: boolean) {
    this.visible = value;
  }
  
}
