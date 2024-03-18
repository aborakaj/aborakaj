import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() title: string = "Users";
  @Input() subtitle: string = "Add, edit or remove users from your spaces";
  @Input() actionButtonLabel: string = "Add User";
  @Input() actionButtonIcon: string = "pi pi-user-plus";
  @Input() tableReference: any = "dt";
  @Output() actionButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('dt') dt!: Table;

  onActionButtonClick() {
    this.actionButtonClick.emit();
  }

  onSearchChange(value: string) {
    this.searchValue.emit(value);
  }
}



