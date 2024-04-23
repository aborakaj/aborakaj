import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOGIN_URL } from '../../shared/constants/url';
import { jwtDecode } from 'jwt-decode';
import { tokenPayload } from '../models/tokenPayload.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  getUserId(): string | undefined {
    const token = this.getToken();

    if (!token) {
      return;
    }
    else {
      const payload: tokenPayload = jwtDecode(token);
      return payload.sub;
    }
  }

  getUserRole(): string | undefined {
    const token = this.getToken();

    if (!token) {
      return;
    }
    else {
      const payload: tokenPayload = jwtDecode(token);
      return payload.role;
    }
  }

  getUserPermissions(): [] | undefined {
    const token = this.getToken();

    if (!token) {
      return;
    }
    else {
      const payload: tokenPayload = jwtDecode(token);
      return payload.permissions;
    }
  }

  getTokenExpiration(): number | undefined {
    const token = this.getToken();

    if (!token) {
      return;
    }
    else {
      const payload: tokenPayload = jwtDecode(token);
      return payload.exp;
    }
  }

  dateToUnixEpoch(date: Date): number {
    return Math.floor(date.getTime() / 1000);
  }

  checkTokenExp(): boolean {
    const expirationDate = this.getTokenExpiration();
    const date = new Date();
    const currentDate = this.dateToUnixEpoch(date);

    if (expirationDate! > currentDate)
      return true;
    else {
      return false;
    }
  }

  login(identifier: string, password: string): Observable<any> {
    return this.http.post(LOGIN_URL, { identifier, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  clearToken(): void {
    localStorage.removeItem('jwt');
  }
}