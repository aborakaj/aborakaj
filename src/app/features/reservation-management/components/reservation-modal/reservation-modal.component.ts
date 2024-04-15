import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../../../core/models/reservation.interface';
import { setHours, setMinutes } from 'date-fns';
import { reservationMock, spacesMock, timesMock } from '../reservation.mock';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrl: './reservation-modal.component.scss',
})
export class ReservationModalComponent implements OnInit {
  @Input() isDisplayModal!: boolean;
  @Input() isDeskReserved: boolean = false;
  @Input() title!: string;
  @Input() icon?: string;
  @Input() subtitle?: string;
  @Output() submitReservation = new EventEmitter<Reservation>();
  @Output() close = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}

  spaces!: any[];
  times!: any[];
  reservationMock!: any[];
  formattedDate!: string;

  reservationForm: FormGroup = this.fb.group({
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    space: ['', Validators.required],
    bookingTitle: ['', Validators.required],
  });

  ngOnInit(): void {
    this.spaces = spacesMock;
    this.times = timesMock;
    this.reservationMock = reservationMock;
    this.updateTimeAvailability();
  }

  updateTimeAvailability(): void {
    const selectedDate = this.reservationForm.get('startTime')?.value;

    this.times.forEach((timesMock) => {
      const [hour, minute] = timesMock.time.split(':').map(Number);
      const timeSlotDate = setMinutes(setHours(selectedDate, hour), minute);

      const isReserved = this.reservationMock.some((reservation) => {
        const start = new Date(reservation.startTime);
        const end = new Date(reservation.endTime);
        return timeSlotDate >= start && timeSlotDate < end;
      });

      timesMock.disabled = isReserved;
    });
  }

  onSubmitReservation() {
    this.submitReservation.emit(this.reservationForm.value);
  }

  onReservationModalClose() {
    this.isDisplayModal = false;
    this.close.emit();
    this.reservationForm.reset();
  }
}
