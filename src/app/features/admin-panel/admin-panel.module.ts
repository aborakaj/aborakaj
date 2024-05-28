import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsModule } from './pages/settings-page/settings.module';
import { UserManagementModule } from './pages/user-management/user-management.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SettingsModule, UserManagementModule],
})
export class AdminPanelModule {}
