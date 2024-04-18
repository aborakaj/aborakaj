import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class SettingsLayoutComponent {
  sidebarVisible = false;

  toggleSettingsSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
