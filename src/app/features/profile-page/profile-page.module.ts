import { NgModule } from '@angular/core';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PersonalDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PersonalDetailsComponent]
})
export class ProfilePageModule { }
