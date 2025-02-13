import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { ErrorInterceptor } from './interceptors/error-interceptor.interceptor';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('jwt');
        },
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class CoreModule {}
