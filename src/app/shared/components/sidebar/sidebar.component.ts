import { Component } from '@angular/core';
import { SidebarsItems } from '../../../core/models/sidebars-items.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  mainSidebarItems: SidebarsItems[] = [
    {
      icon: 'pi pi-calendar',
      routerLink: './reservations',
    },
    {
      icon: 'pi pi-users',
      routerLink: './users',
    },
  ];

  secondarySidebarItems: SidebarsItems[] = [
    {
      icon: 'pi pi-cog',
      routerLink: './settings',
    },
    {
      icon: 'pi pi-user',
      routerLink: './profile',
    },
  ];
}
