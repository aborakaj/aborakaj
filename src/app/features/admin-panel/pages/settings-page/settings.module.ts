import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { AvailabilityComponent } from './availabilty/availability.component';
import { MySpacesComponent } from './my-spaces/my-spaces.component';
import { DeleteConfirmationComponent } from '../../components/delete-confirmation/delete-confirmation.component';
import { AddSpaceModalComponent } from '../../components/add-space-modal/add-space-modal.component';
import { RoleModalComponent } from '../../components/role-modal/role-modal.component';
import { RolesComponent } from './roles/roles.component'; 

@NgModule({
  declarations: [
    AvailabilityComponent,
    MySpacesComponent,
    DeleteConfirmationComponent,
    AddSpaceModalComponent,
    RoleModalComponent,
    RolesComponent  
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SettingsModule { }
