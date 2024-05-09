import { Component } from '@angular/core';
import { SidebarItems } from '../../../core/models/sidebar-items.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})

export class LayoutComponent {

  constructor(private activatedRoute: ActivatedRoute) { }

  url = this.activatedRoute.snapshot.routeConfig?.path;


  adminItems: SidebarItems[] = [
    {
      icon: 'pi pi-calendar',
      routerLink: './reservations',
    },
    {
      icon: 'pi pi-users',
      routerLink: './users',
    },
    {
      icon: 'pi pi-cog',
      routerLink: './settings',
    },
    {
      icon: 'pi pi-user',
      routerLink: './profile',
    },
  ];

  userItems: SidebarItems[] = [
    {
      icon: 'pi pi-calendar',
      routerLink: './reservations',
    },
    {
      icon: 'pi pi-user',
      routerLink: './profile',
    },
  ];
}
