import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
  providers: [FilterService]
})
export class UserPageComponent {
  constructor(private filterService: FilterService) { }

  visible: boolean = false;
  header = "Add user"
  title = "Users"
  subtitle = "Add, edit or remove users from your spaces"
  actionButtonLabel = "Add User";
  actionButtonIcon = "pi pi-user-plus";
  tableReference = "dt"
  dataKey = "firstName"
  cols = [

    { field: 'firstName', header: 'First name' },
    { field: 'lastName', header: 'Last name' },
    { field: 'email', header: 'Email' },
    { field: 'phoneNumber', header: 'Phone number' },

  ];

  rows = 10
  data = [

    { firstName: '1', lastName: 'a', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '2', lastName: 'b', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '3', lastName: 'c', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '4', lastName: 'd', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '5', lastName: 'e', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '6', lastName: 'f', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '7', lastName: 'g', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '8', lastName: 'h', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '9', lastName: 'i', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '10', lastName: 'j', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '11', lastName: 'k', email: 'firstName', phoneNumber: 'First name' },
    { firstName: '12', lastName: 'l', email: 'firstName', phoneNumber: 'First name' },


  ]
  filteredData = this.data;
  globalFilterFields = this.cols.map(col => col.field);
  currentPageReportTemplate = "Rows per page: {rows}  \u0010\u0010  {first} - {last} of {totalRecords}"

  onClose() {
    this.visible = false;
  }

  showModal() {
    this.visible = true
  }

  onRowSelect() {
    this.visible = true
  }

  onSearch(query: string) {
    this.filteredData = this.filterService.filter(this.data, this.globalFilterFields, query, 'contains');
  }

}



