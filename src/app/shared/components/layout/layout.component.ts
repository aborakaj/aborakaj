import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs';
interface MenuItem {
  name: string;
  icon?: string;
  routerLink: string | any;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  sidebarVisible = false;

  

  toggleSettingsSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  onSettingsIconClick() {
    this.toggleSettingsSidebar();
  }
}
