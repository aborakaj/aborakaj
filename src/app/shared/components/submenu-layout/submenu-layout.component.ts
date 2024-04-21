import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-submenu-layout',
  templateUrl: './submenu-layout.component.html',
  styleUrl: './submenu-layout.component.scss',
})
export class SubmenuLayoutComponent {
  @Input() sidebarVisible: boolean = false;

  activeSubmenu: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.pipe(
      map(data => data['submenu'])
    ).subscribe((submenu: string) => {
      this.activeSubmenu = submenu;
    });
  }

  toggleSettingsSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
