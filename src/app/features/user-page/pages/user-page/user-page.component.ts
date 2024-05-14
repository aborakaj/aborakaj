import { Component } from '@angular/core';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
  providers: [FilterService],
})
export class UserPageComponent {
  constructor(private filterService: FilterService) {}

  visible: boolean = false;
  cols = [
    { field: 'firstName', header: 'First name' },
    { field: 'lastName', header: 'Last name' },
    { field: 'email', header: 'Email' },
    { field: 'phoneNumber', header: 'Phone number' },
  ];
  data = [
    {
      firstName: 'Dorothy',
      lastName: 'Mercer',
      email: 'nunc.interdum@outlook.edu',
      phoneNumber: '076 3872 3440',
    },
    {
      firstName: 'Heather',
      lastName: 'Anderson',
      email: 'risus.varius.orci@google.ca',
      phoneNumber: '055 3227 2687',
    },
    {
      firstName: 'Tate',
      lastName: 'Rowland',
      email: 'purus.in@google.ca',
      phoneNumber: '055 5393 3950',
    },
    {
      firstName: 'Tatum',
      lastName: 'Cohen',
      email: 'ante@outlook.ca',
      phoneNumber: '(0119) 665 7774',
    },
    {
      firstName: 'Cadman',
      lastName: 'Pierce',
      email: 'amet.ante@google.org',
      phoneNumber: '0800 180437',
    },
    {
      firstName: 'Shad',
      lastName: 'Hopper',
      email: 'molestie@google.org',
      phoneNumber: '055 5157 0528',
    },
    {
      firstName: 'Flavia',
      lastName: 'Guerrero',
      email: 'id.mollis.nec@google.com',
      phoneNumber: '070 5406 6375',
    },
    {
      firstName: 'Cullen',
      lastName: 'Bell',
      email: 'lorem.vitae@hotmail.com',
      phoneNumber: '(016977) 3728',
    },
    {
      firstName: 'Serena',
      lastName: 'Orr',
      email: 'eu.tellus@google.couk',
      phoneNumber: '(01406) 826550',
    },
    {
      firstName: 'Dexter',
      lastName: 'Osborn',
      email: 'elit.elit.fermentum@aol.com',
      phoneNumber: '0800 631578',
    },
    {
      firstName: 'Destiny',
      lastName: 'Cox',
      email: 'rutrum.justo@hotmail.edu',
      phoneNumber: '(024) 3448 0272',
    },
    {
      firstName: 'Asher',
      lastName: 'Calderon',
      email: 'quam.curabitur@icloud.net',
      phoneNumber: '07020 828385',
    },
    {
      firstName: 'Chloe',
      lastName: 'Bean',
      email: 'tristique.senectus@yahoo.com',
      phoneNumber: '0800 402 1774',
    },
    {
      firstName: 'Vivien',
      lastName: 'Avila',
      email: 'non@aol.couk',
      phoneNumber: '0800 1111',
    },
    {
      firstName: 'Galena',
      lastName: 'Morse',
      email: 'parturient@protonmail.com',
      phoneNumber: '0800 1111',
    },
    {
      firstName: 'Mira',
      lastName: 'Callahan',
      email: 'euismod.et@google.net',
      phoneNumber: '(01751) 64262',
    },
    {
      firstName: 'Chanda',
      lastName: 'Carson',
      email: 'accumsan.neque.et@yahoo.edu',
      phoneNumber: '0800 414 7501',
    },
    {
      firstName: 'Celeste',
      lastName: 'Sharpe',
      email: 'cursus.et@protonmail.com',
      phoneNumber: '(013336) 32234',
    },
    {
      firstName: 'Yeo',
      lastName: 'Battle',
      email: 'euismod.mauris.eu@hotmail.net',
      phoneNumber: '0500 542880',
    },
    {
      firstName: 'Mari',
      lastName: 'Hurst',
      email: 'nascetur.ridiculus.mus@outlook.org',
      phoneNumber: '0800 1111',
    },
  ];
  filteredData = this.data;
  globalFilterFields = this.cols.map((col) => col.field);
  filterValue: string = '';

  changeVisibility(value: boolean) {
    this.visible = value;
  }

  onSearch() {
    const query = this.filterValue;
    this.filteredData = this.filterService.filter(
      this.data,
      this.globalFilterFields,
      query,
      'contains'
    );
  }
}
