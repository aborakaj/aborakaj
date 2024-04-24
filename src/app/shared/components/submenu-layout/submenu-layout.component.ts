import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SubmenuItem } from '../../../core/models/submenu-items.interface';

@Component({
  selector: 'app-submenu-layout',
  templateUrl: './submenu-layout.component.html',
  styleUrl: './submenu-layout.component.scss',
})
export class SubmenuLayoutComponent {
  @Input() sidebarVisible: boolean = true;

  activeSubmenu!: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(map((data) => data['submenu']))
      .subscribe((submenu: string) => {
        this.activeSubmenu = submenu;
      });
  }

  settingsItems: SubmenuItem[] = [
    {
      name: 'My spaces',
      icon: 'pi pi-building',
      routerLink: './my-spaces',
    },
    {
      name: 'Availability',
      icon: 'pi pi-clock',
      routerLink: './availability',
    },
  ];

  profileItems: SubmenuItem[] = [
    {
      name: 'Personal details',
      routerLink: './details',
    },
  ];

  toggleSettingsSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
