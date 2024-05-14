import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../../../core/models/reservation.interface';
import {
  ReservationMock,
  Space,
  TimeSlot,
  reservationMock,
  spacesMock,
  timesMock,
} from '../reservation.mock';
import { Subscription } from 'rxjs';
import { isSameDay } from 'date-fns';

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

  reservationForm: FormGroup;
  private subscriptions = new Subscription();

  spaces!: Space[];
  times!: TimeSlot[];
  endTimes!: TimeSlot[];
  reservationMock!: ReservationMock[];
  minDateValue!: Date;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      space: ['', Validators.required],
      bookingTitle: [''],
    });
  }

  ngOnInit(): void {
    this.spaces = spacesMock;
    this.times = timesMock.map((slot) => ({
      ...slot,
      disabled: false,
    }));
    this.reservationMock = reservationMock;
    this.disabledDates();
    this.initializeEndTimes();
    this.setupFormSubscriptions();
  }

  initializeEndTimes(): void {
    this.endTimes = this.times.map((timeSlot) => ({
      ...timeSlot,
      disabled: true,
    }));
  }

  setupFormSubscriptions(): void {
    this.reservationForm.get('space')?.valueChanges.subscribe(() => {
      this.resetSelections();
      this.filterTimesBySpaceAndDate();
    });

    this.reservationForm
      .get('startTime')
      ?.valueChanges.subscribe((selectedStartTime) => {
        if (selectedStartTime) {
          this.updateEndTimeOptions(selectedStartTime);
        } else {
          this.initializeEndTimes();
        }
      });
  }

  filterTimesBySpaceAndDate(): void {
    const selectedDate: Date = this.reservationForm.get('startTime')?.value;
    const selectedSpace = this.reservationForm.get('space')?.value?.id;

    if (selectedDate && selectedSpace) {
      this.times = timesMock.map((slot) => ({
        ...slot,
        time: new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          slot.time.getHours(),
          slot.time.getMinutes()
        ),
      }));

      this.times.forEach((timeSlot) => {
        const isReserved = this.reservationMock.some((reservation) => {
          return (
            reservation.spaceId === selectedSpace &&
            isSameDay(selectedDate, reservation.startTime) &&
            timeSlot.time >= reservation.startTime &&
            timeSlot.time < reservation.endTime
          );
        });
        timeSlot.disabled = isReserved;
      });
    } else {
      this.times = timesMock.map((slot) => ({
        ...slot,
        disabled: false,
      }));
    }
  }

  updateEndTimeOptions(selectedStartTime: Date): void {
    if (!selectedStartTime) {
      this.endTimes = this.times.map((timeSlot) => ({
        ...timeSlot,
        disabled: true,
      }));
      return;
    }

    const selectedSpace = this.reservationForm.get('space')?.value?.id;
    const selectedDate = new Date(
      selectedStartTime.getFullYear(),
      selectedStartTime.getMonth(),
      selectedStartTime.getDate()
    );

    this.endTimes = this.times.map((timeSlot) => {
      const endTimeCandidate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        timeSlot.time.getHours(),
        timeSlot.time.getMinutes()
      );

      const isAfterStartTime = endTimeCandidate > selectedStartTime;
      const overlappingReservations = this.reservationMock.filter(
        (reservation) => {
          const reservationDate = new Date(
            reservation.startTime.getFullYear(),
            reservation.startTime.getMonth(),
            reservation.startTime.getDate()
          );
          return (
            reservation.spaceId === selectedSpace &&
            +reservationDate === +selectedDate &&
            selectedStartTime < reservation.endTime &&
            endTimeCandidate > reservation.startTime
          );
        }
      );

      const isDuringReservation = overlappingReservations.length > 0;
      const earliestEndTime = overlappingReservations.reduce(
        (earliest, current) => {
          return current.startTime < earliest ? current.startTime : earliest;
        },
        new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          23,
          59
        )
      );

      return {
        ...timeSlot,
        disabled:
          !isAfterStartTime ||
          isDuringReservation ||
          endTimeCandidate >= earliestEndTime,
      };
    });
  }

  resetSelections() {
    this.reservationForm.get('startTime')?.reset();
    this.reservationForm.get('endTime')?.reset();
    this.initializeEndTimes();
  }

  disabledDates() {
    this.minDateValue = new Date();
  }

  onSubmitReservation() {
    if (this.reservationForm.valid) {
      this.submitReservation.emit(this.reservationForm.value);
      console.log('Submitted successfully');
      this.onVisibleChange(false);
    } else {
      console.log('Error submitting');
    }
  }

  onVisibleChange(visible: boolean): void {
    this.visibleChange.emit(visible);
    if (!visible) {
      this.reservationForm.reset();
    }
  }

  checkForErrorsIn(control: AbstractControl | null): string {
    if (!control) return '';
    if (control.hasError('required')) {
      return 'Field is required';
    } else if (control.hasError('pattern')) {
      return 'Invalid format';
    } else if (control.hasError('minlength')) {
      return `Minimum length ${control.errors?.['minlength'].requiredLength}`;
    }
    return '';
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
