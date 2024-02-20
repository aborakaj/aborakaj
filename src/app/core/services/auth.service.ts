import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOGIN_URL } from '../../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  getUserIdFromToken(): string | null {
    const token = this.getToken();
    if (!token) return null;
  
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.sub;
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
