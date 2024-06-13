import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  visible: boolean = false;
  actionButtonLabel: string = 'Add Role';
  header: string = 'Roles Management';
  subtitle: string = 'Add user roles with ease, ensuring clear delegation of responsibilities across your organization.';

  constructor() { }

  changeVisibility(isVisible: boolean): void {
    this.visible = isVisible;
  }

  addRole(): void {
    this.changeVisibility(true);
  }
}