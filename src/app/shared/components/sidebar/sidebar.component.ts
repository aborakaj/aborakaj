import { Component, Input } from '@angular/core';
import { SidebarItems } from '../../../core/models/sidebar-items.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  @Input() menuItems: SidebarItems[] = [];

}
