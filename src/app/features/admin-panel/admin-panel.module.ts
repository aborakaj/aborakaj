import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsModule } from './pages/settings-page/settings.module';
import { UserManagementModule } from './pages/user-management/user-management.module';
import { AdminPanelComponent } from './admin-panel.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [CommonModule, SettingsModule, UserManagementModule, SharedModule],
})
export class AdminPanelModule {}
