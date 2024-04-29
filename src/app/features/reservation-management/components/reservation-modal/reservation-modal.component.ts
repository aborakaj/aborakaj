import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../../../core/models/reservation.interface';
import { setHours, setMinutes } from 'date-fns';
import {
  ReservationMock,
  Space,
  TimeSlot,
  reservationMock,
  spacesMock,
  timesMock,
} from '../reservation.mock';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrl: './reservation-modal.component.scss',
})
export class ReservationModalComponent implements OnInit {
  @Input() visible!: boolean;
  @Input() isDeskReserved: boolean = false;
  @Input() title!: string;
  @Input() icon?: string;
  @Input() subtitle?: string;
  @Output() submitReservation = new EventEmitter<Reservation>();
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  spaces!: Space[];
  times!: TimeSlot[];
  reservationMock!: ReservationMock[];
  formattedDate!: string;
  minDateValue!: Date;

  private spaceSubscription!: Subscription;
  private dateSubscription!: Subscription;

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
    this.disabledDates();

    this.reservationForm.get('space')?.valueChanges.subscribe(() => {
      if (this.reservationForm.get('startTime')?.value) {
        this.filterTimesBySpaceAndDate();
      }
    });

    this.reservationForm.get('startTime')?.valueChanges.subscribe(() => {
      if (this.reservationForm.get('space')?.value) {
        this.filterTimesBySpaceAndDate();
      }
    });
  }

  filterTimesBySpaceAndDate(): void {
    const selectedDate = this.reservationForm.get('startTime')?.value;
    const selectedSpaceId = this.reservationForm.get('space')?.value?.id;

    this.times.forEach((timeSlot) => {
      const [hour, minute] = timeSlot.time.split(':').map(Number);
      const timeSlotDate = setMinutes(setHours(selectedDate, hour), minute);

      const isReserved = this.reservationMock.some((reservation) => {
        const start = new Date(reservation.startTime);
        const end = new Date(reservation.endTime);
        return (
          reservation.spaceId === selectedSpaceId &&
          timeSlotDate >= start &&
          timeSlotDate < end
        );
      });

      timeSlot.disabled = isReserved;
    });
  }

  disabledDates() {
    this.minDateValue = new Date();
  }

  onSubmitReservation() {
    this.submitReservation.emit(this.reservationForm.value);
  }

  onVisibleChange(event: boolean) {
    this.visibleChange.emit(event);
    this.reservationForm.reset();
  }

  ngOnDestroy(): void {
    this.spaceSubscription.unsubscribe();
    this.dateSubscription.unsubscribe();
  }
}
