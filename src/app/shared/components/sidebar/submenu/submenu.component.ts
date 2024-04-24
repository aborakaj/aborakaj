import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SubmenuItem } from '../../../../core/models/submenu-items.interface';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss',
})
export class SubmenuComponent {
  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange = new EventEmitter<boolean>();
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() submenuItems: SubmenuItem[] = [];
}
