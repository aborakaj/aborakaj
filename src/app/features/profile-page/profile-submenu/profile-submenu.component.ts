import { Component, Input } from '@angular/core';
interface MenuItem {
  name: string;
  icon?: string;
  routerLink: string;
}
@Component({
  selector: 'app-profile-submenu',
  templateUrl: './profile-submenu.component.html',
  styleUrl: './profile-submenu.component.scss',
})
export class ProfileSubmenuComponent {
  @Input() sidebarVisible: boolean = false;
  @Input() title!: string;
  menuItems: MenuItem[] = [
    {
      name: 'Personal details',
      routerLink: '/home/profile/details',
    },
  ];
}
