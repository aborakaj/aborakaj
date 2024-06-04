import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailabilityComponent } from './availabilty/availability.component';
import { MySpacesComponent } from './my-spaces/my-spaces.component';
import { SharedModule } from '../../../../shared/shared.module';
import { DeleteConfirmationComponent } from '../../components/delete-confirmation/delete-confirmation.component';
import { AddSpaceModalComponent } from '../../components/add-space-modal/add-space-modal.component';


@NgModule({
  declarations: [AvailabilityComponent, MySpacesComponent, DeleteConfirmationComponent, AddSpaceModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SettingsModule { }
