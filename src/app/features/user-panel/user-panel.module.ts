import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './user-panel.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [UserPanelComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserDashboardModule { }
