import { Component, Input } from '@angular/core';
import { SubmenuItem } from '../../../core/models/submenu-items.interface';

@Component({
  selector: 'app-profile-submenu',
  templateUrl: './profile-submenu.component.html',
  styleUrl: './profile-submenu.component.scss',
})
export class ProfileSubmenuComponent {
  @Input() sidebarVisible: boolean = false;
  @Input() title!: string;
  submenuItems: SubmenuItem[] = [
    {
      name: 'Personal details',
      routerLink: '/home/profile/details',
    },
  ];
}
