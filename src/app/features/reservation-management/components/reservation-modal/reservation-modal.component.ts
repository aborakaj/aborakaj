import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../../../core/models/IReservation';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.scss'],
})
export class ReservationModalComponent implements OnInit {
  @Input() isDisplayModal: boolean = false;
  @Input() isDeskReserved: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submitReservation = new EventEmitter<Reservation>();

  reservationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.reservationForm = this.fb.group({
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      action: [{ value: 'BOOKED', disabled: true }],
    });
  }

  onSubmitReservation() {
    if (this.reservationForm.valid) {
      this.submitReservation.emit(this.reservationForm.value);
    }
  }

  onClose() {
    this.close.emit();
  }
}
