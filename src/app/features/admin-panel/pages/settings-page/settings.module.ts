import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailabilityComponent } from './availabilty/availability.component';
import { MySpacesComponent } from './my-spaces/my-spaces.component';


@NgModule({
  declarations: [AvailabilityComponent, MySpacesComponent],
  imports: [
    CommonModule,
  ]
})
export class SettingsModule { }
