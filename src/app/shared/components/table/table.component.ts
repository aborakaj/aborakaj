import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})

export class TableComponent {

  @Input() dataKey!: string;
  @Input() cols!: any[];
  @Input() rows!: number;
  @Input() data!: any[];
  @Input() currentPageReportTemplate!: string;
  @Input() filterText!: string;
  @Input() selection!: any;
  @Output() rowSelect: EventEmitter<void> = new EventEmitter<void>();

  sortIcon = faSort;
  sortUpIcon = faSortUp;
  sortDownIcon = faSortDown;

  onRowSelect(event: any) {
    this.rowSelect.emit(event);
  }
}
