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

@Component({
  selector: 'app-calendar-control',
  templateUrl: './calendar-control.component.html',
  styleUrl: './calendar-control.component.scss',
})
export class CalendarControlComponent implements OnInit, OnDestroy {
  @Input('fullcalendar') fullcalendar: FullCalendarComponent | undefined;
  @Output() selectRoom = new EventEmitter<RoomSelected>();

  roomServiceSub!: Subscription;
  rooms: RoomSelected[] = [{ name: 'All Rooms', id: '' }];
  currentDate: string = format(new Date(), 'EEEE MMMM do yyyy');

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getRooms().subscribe({
      next: (rooms: Room[]) => {
        rooms.map((room: Room) =>
          this.rooms.push({ name: room.name, id: room.id })
        );
      },
    });
  }

  onDayClick() {
    this.fullcalendar?.getApi().changeView('timeGridDay');
  }

  onMonthClick() {
    this.fullcalendar?.getApi().changeView('dayGridMonth');
  }

  onRoomSelected(room: RoomSelected) {
    this.selectRoom.emit(room);
  }

  ngOnDestroy(): void {
    this.roomServiceSub?.unsubscribe();
  }
}
