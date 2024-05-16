import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';

import { LayoutComponent } from '../shared/components/layout/layout.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ModalComponent } from '../shared/components/custom-modal/modal.component';
import { TableComponent } from '../shared/components/table/table.component';
import { PageHeaderComponent } from '../shared/components/page-header/page-header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { NestedSidebarComponent } from '../shared/components/nested-sidebar/nested-sidebar.component';
import { ChildLayoutComponent } from '../shared/components/child-layout/child-layout.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FilterEventsPipe } from '../shared/pipes/filter-events.pipe';
import { LoginComponent } from './components/login-page/login.component';
import { MessagesModule } from 'primeng/messages';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    FooterComponent,
    ModalComponent,
    TableComponent,
    PageHeaderComponent,
    SidebarComponent,
    NestedSidebarComponent,
    ChildLayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([]),
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
    CheckboxModule,
    MessagesModule
  ],
  exports: [
    LoginComponent,
    LayoutComponent,
    FooterComponent,
    ModalComponent,
    TableComponent,
    PageHeaderComponent,
    SidebarComponent,
    NestedSidebarComponent,
    ChildLayoutComponent,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
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
    CheckboxModule,
    MessagesModule
  ],

})
export class SharedModule { }
