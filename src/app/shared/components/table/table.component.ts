import { Component } from '@angular/core';
import { User, UserService } from '../../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Table } from 'primeng/table';
import { AuthService } from '../../../core/services/auth.service'; 
interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  users!: User[];

  cols!: Column[];
  clonedUsers: { [s: string]: User } = {};

  globalFilterFields: string[] = [];


  constructor(private userService: UserService,
    private toastr: ToastrService,
    private authService: AuthService) {}

  ngOnInit() {
    this.fetchUsers();
    

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'username', header: 'Username' },
      { field: 'email', header: 'E-mail' },
      { field: 'password', header: 'Password' },
      { field: 'createdAt', header: 'Created at' },
      { field: 'updatedAt', header: 'Updated at' },
      { field: 'createdBy', header: 'Created by' },
      { field: 'updatedBy', header: 'Updated by' },
  ];
  this.globalFilterFields = this.cols.map(col => col.field);
  }

  fetchUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        this.toastr.error('Error fetching users');
      },
    });
  }
  clear(table: Table) {
    table.clear();
}
onRowEditInit(user: User) {
  this.clonedUsers[user.id as string] = { ...user };
}

onRowEditSave(user: User) {

  user.updatedAt = new Date().toISOString();
  user.updatedBy = this.authService.getUserIdFromToken()!
  this.userService.updateUser(user.id, user)
      .subscribe({
          next: () => {
              delete this.clonedUsers[user.id as string];
              this.toastr.success('User is updated', 'Success');
          },
          error: (error) => {
              console.error('Error updating user:', error);
              this.toastr.error('Failed to update user', 'Failed');
          }
      });
}


onRowEditCancel(user: User, index: number) {
  this.users[index] = this.clonedUsers[user.id as string];
  delete this.clonedUsers[user.id as string];
}
// logRowData(rowData: any) {
//   console.log(rowData);
// }
}
