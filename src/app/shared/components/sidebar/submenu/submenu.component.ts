import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  name: string;
  icon?: string;
  routerLink: string | any;
}

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss',
})
export class SubmenuComponent {
  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange = new EventEmitter<boolean>();
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() menuItems: MenuItem[] = [];

  constructor(private router: Router) {}

  toggleVisibility() {
    this.sidebarVisible = !this.sidebarVisible;
    this.sidebarVisibleChange.emit(this.sidebarVisible);
  }

  onMenuItemClick(item: MenuItem) {
    this.router.navigate([item.routerLink]);
  }
}
