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
import { UserReservationComponent } from './features/reservation-management/pages/user-reservation/user-reservation.component';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DashboardComponent } from './features/user-dashboard/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    ReservationComponent,
    UserReservationComponent,
    DashboardComponent //component not page
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
    ReactiveFormsModule,
    CalendarModule,
    DialogModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
