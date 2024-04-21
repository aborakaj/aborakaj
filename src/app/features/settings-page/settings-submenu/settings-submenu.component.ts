import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubmenuItem } from '../../../core/models/submenu-items.interface';

@Component({
  selector: 'app-settings-submenu',
  templateUrl: './settings-submenu.component.html',
  styleUrl: './settings-submenu.component.scss',
})
export class SettingsSubmenuComponent {
  @Input() sidebarVisible: boolean = false;
  @Input() title!: string;
  submenuItems: SubmenuItem[] = [
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
