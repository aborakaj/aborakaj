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
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { LoginComponent } from './shared/components/login-page/login.component';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DashboardComponent } from './features/user-panel/components/dashboard/dashboard.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { AuthInterceptor } from './core/interceptors/auth-interceptor.service';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ModalComponent } from './shared/components/custom-modal/modal.component';
import { TableModule } from 'primeng/table';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ReservationCalendarComponent } from './shared/components/reservation-calendar/reservation-calendar.component';
import { CalendarControlComponent } from './shared/components/calendar-control/calendar-control.component';
import { FilterEventsPipe } from './shared/pipes/filter-events.pipe';
import { TableComponent } from './shared/components/table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from 'primeng/card';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ErrorInterceptor } from './core/interceptors/error-interceptor.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { MySpacesComponent } from './features/settings-page/my-spaces/my-spaces.component';
import { PersonalDetailsComponent } from './features/profile-page/personal-details/personal-details.component';
import { AvailabilityComponent } from './features/settings-page/availabilty/availability.component';
import { NestedSidebarComponent } from './shared/components/nested-sidebar/nested-sidebar.component';
import { ChildLayoutComponent } from './shared/components/child-layout/child-layout.component';
import { MessagesModule } from 'primeng/messages';
import { ImageModule } from 'primeng/image';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { RegisterComponent } from './features/register-page/register.component';
import { ReservationModalComponent } from './features/reservation-page/components/reservation-modal/reservation-modal.component';
import { ReservationComponent } from './features/reservation-page/components/reservation/reservation.component';
import { UserReservationComponent } from './features/reservation-page/pages/user-reservation/user-reservation.component';
import { UserPageComponent } from './features/user-page/pages/user-page/user-page.component';
import { UserPageModalComponent } from './features/user-page/components/user-modal/user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    ReservationComponent,
    UserReservationComponent,
    DashboardComponent,
    LayoutComponent,
    FooterComponent,
    ReservationModalComponent,
    ModalComponent,
    ReservationCalendarComponent,
    CalendarControlComponent,
    TableComponent,
    PageHeaderComponent,
    UserPageComponent,
    UserPageModalComponent,
    SidebarComponent,
    NestedSidebarComponent,
    ChildLayoutComponent,
    MySpacesComponent,
    AvailabilityComponent,
    PersonalDetailsComponent,
    RegisterComponent,
  ],
  imports: [
    FontAwesomeModule,
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
    DialogModule,
    CommonModule,
    CalendarModule,
    PasswordModule,
    DividerModule,
    DialogModule,
    ToolbarModule,
    SplitButtonModule,
    DropdownModule,
    TableModule,
    FullCalendarModule,
    FilterEventsPipe,
    CardModule,
    SidebarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('jwt');
        },
      },
    }),
    MessagesModule,
    ImageModule,
    RadioButtonModule,
    CheckboxModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
