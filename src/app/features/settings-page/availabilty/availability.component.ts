import { Component, OnInit } from '@angular/core';
import { Room } from '../../../core/models/room.interface';
import { Timespan } from '../../../core/models/timespan.interface';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.scss'
})
export class AvailabilityComponent implements OnInit {

  spaces: Room[] = [];
  times: any = [];
  timeSpans: Timespan[] = [];

  ngOnInit() {
    this.spaces = [
      { id: '000', name: 'Room 1' },
      { id: '001', name: 'Room 2' },
      { id: '002', name: 'Room 3' }
    ];

    this.times = [
      { time: '08:00', status: 'enabled' },
      { time: '09:00', status: 'enabled' },
      { time: '10:00', status: 'enabled' }
    ];

    const savedTimeSpans = localStorage.getItem('timeSpans');
    if (savedTimeSpans && JSON.parse(savedTimeSpans).length > 0) {
      this.timeSpans = JSON.parse(savedTimeSpans);
    } else {
      this.addRow();
    }
  }

  addRow() {
    const timespan: Timespan = {} as Timespan;
    this.timeSpans.push(timespan);
    this.saveTimeSpans();
  }

  delete(rowIndex: number) {
    this.timeSpans.splice(rowIndex, 1);
    this.saveTimeSpans();
  }

  saveTimeSpans() {
    localStorage.setItem('timeSpans', JSON.stringify(this.timeSpans));
  }
}
