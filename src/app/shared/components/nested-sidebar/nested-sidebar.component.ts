import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NestedSidebarItems } from '../../../core/models/nested-sidebar-items.interface';

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
  @Input() submenuItems: NestedSidebarItems[] = [];
}
