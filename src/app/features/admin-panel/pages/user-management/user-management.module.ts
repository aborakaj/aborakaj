import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserPageModalComponent } from './components/user-modal/user-modal.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [UserPageComponent, UserPageModalComponent],
  imports: [CommonModule, SharedModule],
})
export class UserManagementModule {}
