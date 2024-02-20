import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  userMenuItems: MenuItem[] | undefined;
  profileLabel: string = 'B. Rodgers';
  profileIcon: string = 'pi pi-user';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.initializeUserMenuItems();
  }


  initializeUserMenuItems() {
    this.userMenuItems = [
      {
        label: 'My Profile',
        icon: 'pi pi-fw pi-user',
        command: () => { this.navigate('profile'); }
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: () => { this.logout(); }
      },
    ];
  }

  navigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  onDropdownChange(event: any) {
    if (event.value && event.value.command) {
      event.value.command(event);
    }
  }

  logout() {
    this.authService.clearToken();
    this.toastr.success('Logged out successfully', 'Success');
    this.router.navigate(['/login']);
  }
}