import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsModule } from './pages/settings-page/settings.module';
import { UserManagementModule } from './pages/user-management/user-management.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SettingsModule, UserManagementModule, SharedModule],
})
export class AdminPanelModule {}
