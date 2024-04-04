import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ReservationEvent } from './event-utils';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { RoomSelected } from '../../../core/models/room.interface';
import { ReservationStoreService } from '../../../core/services/reservation/reservation-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrl: './reservation-calendar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ReservationCalendarComponent implements OnInit {
  @ViewChild('fullcalendar') calendar: FullCalendarComponent | undefined;

  reservationsEvents$!: Observable<ReservationEvent[]>;
  selectedRoom: RoomSelected = { name: 'All Rooms', id: '' };
  constructor(private reservationStore: ReservationStoreService) {}

  ngOnInit(): void {
    this.reservationsEvents$ = this.reservationStore.reservationsAsEvents$
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    weekends: false,
    initialView: 'timeGridDay',
    dayMaxEvents: 3,
    slotEventOverlap: false,
    slotLabelClassNames: 'font-semibold',
    allDaySlot: false,
    timeZone: 'UTC',
    headerToolbar: false,
    dayHeaderClassNames: [
      'flex',
      'align-items-center',
      'gap-4',
      'justify-content-center',
      'p-3',
      'flex-1',
      'bg-blue-100',
      'font-semibold',
      'line-height-3',
      'text-bluegray-800',
      'h-3rem',
    ],
    views: {
      timeGridDay: {
        slotMinTime: '09:00',
        slotMaxTime: '17:00',
        displayEventTime: false,
        slotLabelFormat: {
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        },
        expandRows: true,
        eventClassNames: [
          'flex',
          'p-3',
          'align-items-start',
          'gap-2',
          'timeDayEvent',
          'align-items-stretch',
          'border-round-right-sm',
          'border-solid',
          'border-bluegray-300',
          'bg-white',
        ],
      },
      dayGridMonth: {
        dayHeaders: false,
        eventTimeFormat: {
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
        },
      },
    },
  };

  changeSelectedRoom(newRoom: RoomSelected) {
    // console.log('Event emmitted');
    this.selectedRoom = newRoom;

    // if (newRoom.name.toLowerCase() === 'All Rooms'.toLowerCase()) {
    //   this.calendarOptions = {
    //     ...this.calendarOptions,
    //     events: this.reservationsEvents,
    //   };
    //   return;
    // }

    // const selectedRoomEvents = this.reservationsEvents.filter(
    //   (event: ReservationEvent) => {
    //     return event.extendedProps?.roomId === newRoom.id;
    //   }
    // );
    // this.calendarOptions = {
    //   ...this.calendarOptions,
    //   events: selectedRoomEvents,
    // };
  }

  // ngOnDestroy(): void {
  //   this.reservationEventsSub.unsubscribe();
  // }
}
