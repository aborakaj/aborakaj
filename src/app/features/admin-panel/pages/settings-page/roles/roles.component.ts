import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  roles: any[] = [
    { name: 'Administrator', description: 'Full access to all features.' },
    { name: 'Intern', description: 'Access to learning resources and limited project involvement.' },
    { name: 'Visitor', description: 'Read-only access to public sections of the application.' },
    { name: 'Project Manager', description: 'Full access to project management features and team oversight.' },
    { name: 'UI/UX Designer', description: 'Access to design tools and project collaboration features.' },
    { name: 'Financier', description: 'Access to financial data and budget management features.' }
  ];
  selectedRole: any = null;
  visible: boolean = false;
  deleteModalVisible: boolean = false;
  header: string = 'Role Management';
  actionButtonLabel: string = '';
  cols: any[] = [
    { field: 'name', header: 'Role Name' },
    { field: 'description', header: 'Role Description' }
  ];

  constructor() {}

  changeVisibility(visible: boolean): void {
    this.visible = visible;
    if (visible) {
      this.header = 'Role Management';
      this.actionButtonLabel = 'Add Role';
    }
  }

  addRole(): void {
    this.selectedRole = { name: '', description: '' };
    this.changeVisibility(true);
  }

  saveRole(): void {
    if (this.selectedRole) {
      const existingRoleIndex = this.roles.findIndex(role => role.name === this.selectedRole.name);
      if (existingRoleIndex !== -1) {
        this.roles[existingRoleIndex] = { ...this.selectedRole };
      } else {
        this.roles.push({ ...this.selectedRole });
      }
    }
    this.changeVisibility(false);
  }

  confirmDeleteRole(role: any): void {
    this.selectedRole = role;
    this.deleteModalVisible = true;
  }

  deleteSpaceConfirmed(): void {
    const index = this.roles.indexOf(this.selectedRole);
    if (index !== -1) {
      this.roles.splice(index, 1);
    }
    this.deleteModalVisible = false;
  }

  cancelDelete(): void {
    this.deleteModalVisible = false;
  }

  onRowSelect(event: any): void {
    this.selectedRole = event.data; 
    this.confirmDeleteRole(this.selectedRole);
  }
}
