import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-settings-submenu',
  templateUrl: './settings-submenu.component.html',
  styleUrl: './settings-submenu.component.scss',
})
export class SettingsSubmenuComponent {
  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange = new EventEmitter<boolean>();
  @Input() title: string = '';
  @Input() subtitle?: string;
  menuItems = [
    { name: 'My spaces', icon: 'pi pi-building', routerLink: '/my-spaces' },
    { name: 'Availability', icon: 'pi pi-clock', routerLink: '/availability' },
  ];

  toggleVisibility() {
    this.sidebarVisible = !this.sidebarVisible;
    this.sidebarVisibleChange.emit(this.sidebarVisible);
  }
}
