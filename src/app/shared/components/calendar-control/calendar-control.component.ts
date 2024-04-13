import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { format } from 'date-fns';
import { RoomService } from '../../../core/services/room.service';
import { Room, RoomSelected } from '../../../core/models/room.interface';
import { Subscription } from 'rxjs';
import { ReservationStoreService } from '../../../core/services/reservation/reservation-store.service';

@Component({
  selector: 'app-calendar-control',
  templateUrl: './calendar-control.component.html',
  styleUrl: './calendar-control.component.scss',
})
export class CalendarControlComponent implements OnInit, OnDestroy {
  @Input({ required: true }) fullcalendar!: FullCalendarComponent;
  @Output() roomSelected = new EventEmitter<RoomSelected>();

  roomServiceSub!: Subscription;
  rooms: RoomSelected[] = [];
  currentDate: string = format(new Date(), 'EEEE MMMM do yyyy');
  selectedRoom: RoomSelected = { id: '', name: '' };
  constructor(
    private roomService: RoomService,
    private reservationStore: ReservationStoreService
  ) {}

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getRooms().subscribe({
      next: (rooms: Room[]) => {
        rooms.map((room: Room) =>
          this.rooms.push({ name: room.name, id: room.id })
        );
        this.selectedRoom = this.rooms[0];
        this.roomSelected.emit(this.rooms[0]);
      },
    });
  }

  onDayClick() {
    this.fullcalendar.getApi().changeView('timeGridDay');
  }

  onMonthClick() {
    this.fullcalendar.getApi().changeView('dayGridMonth');
  }

  onRoomSelected() {
    this.roomSelected.emit(this.selectedRoom);
  }

  ngOnDestroy(): void {
    this.roomServiceSub?.unsubscribe();
  }

  addReservations() {
    // added for testing functionallity of the reservationData service, will be removed later
    this.reservationStore.addReservation({
      startTime: '2024-04-09T10:00:57.000Z',
      endTime: '2024-04-09T13:00:57.000Z',
      userId: '9dfd3fce-6d7f-4dc0-a988-bd27fecfa2d2',
      deskId: 'efe5f797-2738-436c-8fb8-b384c7577a32',
      action: 'BOOKED',
      createdBy: '9dfd3fce-6d7f-4dc0-a988-bd27fecfa2d2',
    });
  }
}
