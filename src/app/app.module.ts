import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; 
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { LoginComponent } from './core/components/login/login.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ReservationComponent } from './features/reservation-management/components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule, 
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    ToastrModule.forRoot(),
    ToastModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
