import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
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
    initialView: 'timeGridDay',
    dayCellClassNames: [''],
    dayMaxEvents: 3,
    slotLabelClassNames: 'font-semibold',
    allDaySlot: false,
    contentHeight: 700,
    headerToolbar: false,
    dayHeaderClassNames: [
      'bg-blue-100',
      'text-m',
      'font-medium',
      'text-bluegray-800',
      'p-2',
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
          'bg-white',
          'border-bluegray-300',
          'border-round-md',
          'timeDayEvent',
          'py-5',
        ],
      },
      dayGridMonth: {
        dayHeaders: false,
        eventBackgroundColor: '#C0E1FF',
        eventTimeFormat: {
          hour: '2-digit',
          minute: '2-digit',
          meridiem: true,
        },
      },
    },
  };

  changeSelectedRoom(newRoom: string) {
    this.selectedRoom = newRoom;
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
