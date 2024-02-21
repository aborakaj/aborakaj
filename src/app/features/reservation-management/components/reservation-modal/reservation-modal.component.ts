import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reservation } from '../../../../core/services/reservation.service';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.scss'],
})
export class ReservationModalComponent implements OnInit {
  @Input() isDisplayModal: boolean = false;
  @Input() isDeskReserved: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submitReservation = new EventEmitter<Partial<Reservation>>();

  reservation = {
    startTime: '',
    endTime: '',
    action: 'BOOKED',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmitReservation() {
    this.submitReservation.emit(this.reservation);
  }

  onClose() {
    this.close.emit();
  }
}
