import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EVENTS, Reservation } from './event-utils';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrl: './reservation-calendar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ReservationCalendarComponent {
  @ViewChild('fullcalendar') calendar: FullCalendarComponent | undefined;

  selectedRoom: string = 'All rooms';

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    events: EVENTS,
    weekends: false,
    initialView: 'dayGridMonth',
    dayMaxEvents: 3,
    slotEventOverlap: false,
    slotLabelClassNames: 'font-semibold',
    allDaySlot: false,
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

  changeSelectedRoom(newRoom: string) {
    this.selectedRoom = newRoom;
    if (newRoom.toLowerCase() === 'All Rooms'.toLowerCase()) {
      this.calendarOptions = {
        ...this.calendarOptions,
        events: EVENTS,
      };
      return;
    }

    const selectedRoomEvents = EVENTS.filter((event: Reservation) => {
      return (
        event.extendedProps?.roomName.toLowerCase() === newRoom.toLowerCase()
      );
    });
    this.calendarOptions = {
      ...this.calendarOptions,
      events: selectedRoomEvents,
    };
  }
}
