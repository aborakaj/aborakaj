import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ReservationEvent } from '../../../core/models/reservation.interface';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { RoomSelected } from '../../../core/models/room.interface';
import { ReservationStoreService } from '../../../core/services/reservation/reservation-store.service';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrl: './reservation-calendar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ReservationCalendarComponent implements OnInit, OnDestroy {
  @ViewChild('fullcalendar') calendar: FullCalendarComponent | undefined;

  reservationsEvents$!: Observable<ReservationEvent[]>;
  reservationErrors$!: Subscription;
  selectedRoom: RoomSelected = { name: 'All Rooms', id: '' };

  constructor(
    private reservationStore: ReservationStoreService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.reservationsEvents$ = this.reservationStore.reservationsAsEvents$;
    this.reservationErrors$ =
      this.reservationStore.reservationErrors$.subscribe(
        (errMessage: string | null) => {
          if (errMessage) this.toastr.error(errMessage, 'Alert');
        }
      );
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
    this.selectedRoom = newRoom;
  }

  ngOnDestroy() {
    this.reservationErrors$.unsubscribe();
  }
}
