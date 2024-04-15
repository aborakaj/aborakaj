import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  filterValue: string = '';
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() actionButtonLabel!: string;
  @Input() actionButtonIcon!: string;
  @Input() tableReference!: any;
  @Output() actionButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();

  onActionButtonClick() {
    this.actionButtonClick.emit();
  }

  onInputChange() {
    this.searchValue.emit(this.filterValue);
  }
}



