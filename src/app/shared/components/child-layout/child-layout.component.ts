import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { NestedSidebarItems } from '../../../core/models/nested-sidebar-items.interface';

@Component({
  selector: 'app-submenu-layout',
  templateUrl: './child-layout.component.html',
  styleUrl: './child-layout.component.scss',
})
export class ChildLayoutComponent {
  @Input() sidebarVisible: boolean = true;

  activeSubmenu!: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(map((data) => data['submenu']))
      .subscribe((submenu: string) => {
        this.activeSubmenu = submenu;
      });
  }

  settingsItems: NestedSidebarItems[] = [
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

  profileItems: NestedSidebarItems[] = [
    {
      name: 'Personal details',
      routerLink: './details',
    },
  ];

  toggleSettingsSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
