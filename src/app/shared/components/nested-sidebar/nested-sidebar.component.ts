import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarsItems } from '../../../core/models/sidebars-items.interface';

@Component({
  selector: 'app-nested-sidebar',
  templateUrl: './nested-sidebar.component.html',
  styleUrl: './nested-sidebar.component.scss',
})
export class NestedSidebarComponent {
  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange = new EventEmitter<boolean>();
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() submenuItems: SidebarsItems[] = [];
}
