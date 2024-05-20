import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailabilityComponent } from './availabilty/availability.component';
import { MySpacesComponent } from './my-spaces/my-spaces.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [AvailabilityComponent, MySpacesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SettingsModule { }
