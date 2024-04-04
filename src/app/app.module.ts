import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ReservationComponent } from './features/reservation-management/components/reservation/reservation.component';
import { UserReservationComponent } from './features/reservation-management/pages/user-reservation/user-reservation.component';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DashboardComponent } from './features/user-dashboard/components/dashboard/dashboard.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { AuthInterceptor } from './core/interceptors/auth-interceptor.service';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ReservationModalComponent } from './features/reservation-management/components/reservation-modal/reservation-modal.component';
import { ModalComponent } from './shared/components/custom-modal/modal.component';
import { TableModule } from 'primeng/table';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ReservationCalendarComponent } from './shared/components/reservation-calendar/reservation-calendar.component';
import { CalendarControlComponent } from './shared/components/calendar-control/calendar-control.component';
import { FilterEventsPipe } from './shared/pipes/filter-events.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    ReservationComponent,
    UserReservationComponent,
    DashboardComponent,
    LayoutComponent,
    FooterComponent,
    ReservationModalComponent,
    ModalComponent,
    ReservationCalendarComponent,
    CalendarControlComponent,
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
    ToolbarModule,
    SplitButtonModule,
    DropdownModule,
    TableModule,
    FullCalendarModule,
    FilterEventsPipe
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
