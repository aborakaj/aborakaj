import { Component } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.scss'
})
export class UserPanelComponent {
  mainSidebarItems = [
    { icon: 'pi pi-calendar', routerLink: './reservations' },
  ];

  secondarySidebarItems = [
    { icon: 'pi pi-user', routerLink: './profile' },
  ];
}
