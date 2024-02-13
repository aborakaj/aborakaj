import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_URL } from '../shared/constants/url';
import { AuthService } from '../core/services/auth.service';
import { Reservation } from './reservation.service';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  reservation: Reservation[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders() {
    const token = this.authService.getToken();
    if (token) {
      return {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
    } else {
      throw new Error('Authentication token not found');
    }
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(USER_URL, this.getHeaders());
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${USER_URL}/${id}`, this.getHeaders());
  }

  // getUserReservations(id: string): Observable<User[]> {
    
  // }
}
