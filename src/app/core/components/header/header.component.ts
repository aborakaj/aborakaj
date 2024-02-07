import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items!: MenuItem[];
  profileItems: MenuItem[];
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.items = [
      {
        label: 'Reservation',
        items: [
          {
            label: 'New reservation',
            icon: 'pi pi-fw pi-plus',
            command: () => {
              this.router.navigate(['/new-reservation']);
            },
          },
          {
            label: 'My reservations',
            icon: 'pi pi-fw pi-user',
            command: () => {},
          },
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
          { label: 'Dashboard', icon: 'pi pi-table', command: () => {} },
          { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => {} },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-sign-out',
            command: () => this.logout(),
          },
        ],
      },
    ];
  }

  logout() {
    this.authService.clearToken();
    this.toastr.success('Logged out successfully', 'Success');
    this.router.navigate(['/login']);
  }

  toggle(event: any) {}
}
