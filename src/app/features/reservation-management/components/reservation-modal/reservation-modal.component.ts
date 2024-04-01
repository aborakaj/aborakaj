import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../../../core/models/reservation.interface';
import { isWithinInterval, parseISO, set, setHours, setMinutes } from 'date-fns';

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

  spaces!: any[];
  times!: any[];
  formattedDate!: string;

  reservationForm: FormGroup = this.fb.group({
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    space: ['', Validators.required],
    bookingTitle: ['', Validators.required],
  });

  reservationMock: any[] = [
    {
      id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
      startTime: '2024-03-20T08:00:00.857Z',
      endTime: '2024-03-20T16:00:00.857Z',
      spaceId: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
      bookingTitle: 'Daily Standup',
    }
  ];

  // Mock Data for spaces to test reservation form
  ngOnInit(): void {
    
    this.spaces = [
      {
        id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
        name: 'Intern Room',
        capacity: 5,
        location: 'Next to play area',
        type: 'AVAILABLE',
        floorId: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
      },
      {
        id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
        name: 'Executive Boardroom',
        capacity: 12,
        location: 'Top Floor',
        type: 'BOOKED',
        floorId: '8fb2cde4-8bfc-41f8-ac6e-4b985d9e2a9b',
      },
      {
        id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
        name: 'Small Meeting Room',
        capacity: 4,
        location: 'Second Floor - North Wing',
        type: 'AVAILABLE',
        floorId: 'a3cddf11-e8b4-4d7e-a918-e14b3f6a4f03',
      },
      {
        id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
        name: 'Meeting Room -2',
        capacity: 8,
        location: 'Third Floor',
        type: 'AVAILABLE',
        floorId: 'bbcb1c76-45ab-4e93-bc88-af9f89f50a3f',
      },
      {
        id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
        name: 'Creative Lounge',
        capacity: 10,
        location: 'Fourth Floor - South Wing',
        type: 'BOOKED',
        floorId: 'f1c4f024-ef3b-4b53-9d8b-422d3f690c18',
      },
    ];

    this.times = [
      {
        clock: '08:00', 
      },
      {
        clock: '08:30',
      },
      {
        clock: '09:00',
      },
      {
        clock: '09:30',
      },
      {
        clock: '10:00',
      },
      {
        clock: '10:30',
      },
      {
        clock: '11:00',
      },
      {
        clock: '11:30',
      },
      {
        clock: '12:00',
      },
      {
        clock: '12:30',
      },
      {
        clock: '13:00',
      },
      {
        clock: '13:30',
      },
      {
        clock: '14:00',
      },
      {
        clock: '14:30',
      },
      {
        clock: '15:00',
      },
      {
        clock: '15:30',
      },
      {
        clock: '16:00',
      },
      {
        clock: '16:30',
      },
      {
        clock: '17:00',
      },
      {
        clock: '17:30',
      },
      {
        clock: '18:00',
      },
    ];

    this.updateTimeAvailability();
  }

  updateTimeAvailability(): void {
    this.reservationMock.forEach(reservation => {
      const startTime = parseISO(reservation.startTime);
      const endTime = parseISO(reservation.endTime);
  
      this.times.forEach(timeSlot => {
        const [hours, minutes] = timeSlot.clock.split(':').map(Number);
        const timeSlotDateTime = set(startTime, { hours: hours, minutes: minutes, seconds: 0 });
  
        if (isWithinInterval(timeSlotDateTime, { start: startTime, end: endTime })) {
          timeSlot.disabled = true;
        } else {
          timeSlot.disabled = false;
        }
      });
    });
  }

  onSubmitReservation() {
    this.submitReservation.emit(this.reservationForm.value);
  }

  onReservationModalClose() {
    this.close.emit();
  }
}
