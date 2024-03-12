import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { format } from 'date-fns';

@Component({
  selector: 'app-calendar-control',
  templateUrl: './calendar-control.component.html',
  styleUrl: './calendar-control.component.scss',
})
export class CalendarControlComponent {
  @Input('fullcalendar') fullcalendar: FullCalendarComponent | undefined;
  @Output() selectRoom = new EventEmitter<string>();

  currentDate: string = format(new Date(), 'EEEE MMMM do yyyy');

  rooms: { name: string }[] = [
    { name: 'HR Office' },
    { name: 'Design Office' },
  ];

  onDayClick() {
    this.fullcalendar?.getApi().changeView('timeGridDay');
  }

  onMonthClick() {
    this.fullcalendar?.getApi().changeView('dayGridMonth');
  }

  onRoomSelected(roomName: string) {
    this.selectRoom.emit(roomName);
  }


}
