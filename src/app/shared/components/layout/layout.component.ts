import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @Input() mainSidebarItems: any[] = [];
  @Input() secondarySidebarItems: any[] = [];

  sidebarVisible = false;
}
