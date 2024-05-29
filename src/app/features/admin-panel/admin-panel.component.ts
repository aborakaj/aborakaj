import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {
  mainSidebarItems = [
    { icon: 'pi pi-calendar', routerLink: './reservations' },
    { icon: 'pi pi-users', routerLink: './users' },
  ];

  secondarySidebarItems = [
    { icon: 'pi pi-cog', routerLink: './settings' },
    { icon: 'pi pi-user', routerLink: './profile' },
  ];
}
