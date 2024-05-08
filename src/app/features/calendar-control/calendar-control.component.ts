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
import { RoomService } from '../../core/services/room.service';
import { Room, RoomSelected } from '../../core/models/room.interface';
import { Subscription } from 'rxjs';
import { ReservationStoreService } from '../../core/services/reservation/reservation-store.service';

@Component({
  selector: 'app-calendar-control',
  templateUrl: './calendar-control.component.html',
  styleUrl: './calendar-control.component.scss',
})
export class CalendarControlComponent implements OnInit, OnDestroy {
  @Input({ required: true }) fullcalendar!: FullCalendarComponent;
  @Output() roomSelected = new EventEmitter<RoomSelected>();

  visible: boolean = false;
  actionButtonIcon!: string;

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

  changeVisibility(value: boolean) {
    this.visible = value;
  }

  submitReservation() {}

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
    this.changeVisibility(true);
  }
}
