import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FeaturesModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
