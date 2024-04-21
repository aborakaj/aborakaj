import { Component, EventEmitter, Input, Output } from '@angular/core';
interface MenuItem {
  name: string;
  icon?: string;
  routerLink: string;
}
@Component({
  selector: 'app-settings-submenu',
  templateUrl: './settings-submenu.component.html',
  styleUrl: './settings-submenu.component.scss',
})
export class SettingsSubmenuComponent {
  @Input() sidebarVisible: boolean = false;
  @Input() title!: string;
  menuItems: MenuItem[] = [
    {
      name: 'My spaces',
      icon: 'pi pi-building',
      routerLink: '/home/settings/my-spaces',
    },
    {
      name: 'Availability',
      icon: 'pi pi-clock',
      routerLink: '/home/settings/availability',
    },
  ];
}
