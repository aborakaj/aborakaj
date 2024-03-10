import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})

export class TableComponent {

  @Input() cols!: any[];
  @Input() rows!: number;
  @Input() data!: any[];
  @Input() globalFilterFields!: string[];
  @Input() currentPageReportTemplate!: string;
  @Output() rowSelect: EventEmitter<any> = new EventEmitter<any>();

  sortIcon = faSort;
  sortUpIcon=faSortUp;
  sortDownIcon=faSortDown;


  constructor() { }

  onRowSelect(event: any) {
    this.rowSelect.emit(event.data);
  }

}
