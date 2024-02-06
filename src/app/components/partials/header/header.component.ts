import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  
  items!: MenuItem[]; 
  profileItems: MenuItem[];
  constructor() {
    this.items = [
      {
        label: 'File',
        items: [
          { label: 'New', icon: 'pi pi-fw pi-plus', command: () => {} },
          { label: 'Open', icon: 'pi pi-fw pi-download', command: () => {} },
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', icon: 'pi pi-fw pi-undo', command: () => {} },
          { label: 'Redo', icon: 'pi pi-fw pi-repeat', command: () => {} },
        ],
      },
    ];

    this.profileItems = [
      {
        label: 'Profile',
        items: [
          { label: 'Update', icon: 'pi pi-fw pi-user-edit', command: () => {} },
          { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => {} },
          { label: 'Logout', icon: 'pi pi-fw pi-sign-out', command: () => {} },
        ],
      },
    ];
  }

  toggle(event: any) {}
}
