import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESERVATION_URL } from '../shared/constants/url';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    }
    throw new Error('Authentication token not found');
  }

  getReservation(): Observable<any> {
    return this.http.get(RESERVATION_URL, { headers: this.getHeaders() });
  }

  getReservationById(id: string): Observable<any> {
    return this.http.get(`${RESERVATION_URL}/${id}`, { headers: this.getHeaders() });
  }

  submitReservation(reservationData: any): Observable<any> {
    return this.http.post(RESERVATION_URL, reservationData, { headers: this.getHeaders() });
  }

  updateReservation(id: string, reservationData: any): Observable<any> {
    return this.http.put(`${RESERVATION_URL}/${id}`, reservationData, { headers: this.getHeaders() });
  }

  deleteReservation(id: string): Observable<any> {
    return this.http.delete(`${RESERVATION_URL}/${id}`, { headers: this.getHeaders() });
  }
}
