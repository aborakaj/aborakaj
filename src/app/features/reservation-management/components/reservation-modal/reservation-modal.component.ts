import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../../../core/models/reservation.interface';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.scss'],
})
export class ReservationModalComponent implements OnInit {
  @Input() isDisplayModal: boolean = false;
  @Input() isDeskReserved: boolean = false;
  @Input() title!: string;
  @Input() icon?: string;
  @Input() subtitle?: string;
  @Output() submitReservation = new EventEmitter<Reservation>();
  @Output() close = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}


  reservationForm: FormGroup = this.fb.group({
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    action: [{ value: 'BOOKED', disabled: true }],
  });

  ngOnInit(): void {}

  onSubmitReservation() {
    this.submitReservation.emit(this.reservationForm.value);
  }

  onReservationModalClose() {
    this.close.emit();
  }
}
