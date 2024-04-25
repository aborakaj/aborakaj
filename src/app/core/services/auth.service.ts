import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOGIN_URL } from '../../shared/constants/url';
import { TokenPayload } from '../models/token-payload.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private JwtHelper: JwtHelperService) { }

  getTokenPayload(): TokenPayload {
    const token = this.getToken();
    if (!token) {
      throw new Error('Token not available');
    }

    try {
      const payload = this.JwtHelper.decodeToken(token);
      return payload;
    } catch (error) {
      throw new Error('Failed to decode token');
    }
  }

  checkTokenExp(): boolean {
    const token = this.getToken();
    const isExpired: boolean = this.JwtHelper.isTokenExpired(token);

    if (isExpired) {
      return false;
    }
    return true;
  }

  login(identifier: string, password: string): Observable<any> {
    return this.http.post(LOGIN_URL, { identifier, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  getToken() {
    return localStorage.getItem('jwt');
  }

  clearToken(): void {
    localStorage.removeItem('jwt');
  }
}