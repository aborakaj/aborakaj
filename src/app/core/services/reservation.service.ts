import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESERVATION_URL } from '../../shared/constants/url';
import { User } from './user.service';
import { Desk } from './desk.service';
import { AuthService } from './auth.service';

export interface Reservation {
  id: string;
  startTime: string;
  endTime: string;
  userId: string;
  deskId: string;
  action: string;
  createdBy: string;
  user: User[];
  desk: Desk[];
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getReservation(): Observable<any> {
    return this.http.get(RESERVATION_URL);
  }

  getReservationById(id: string): Observable<any> {
    return this.http.get(`${RESERVATION_URL}/${id}`);
  }

  submitReservation(reservationData: any): Observable<any> {
    return this.http.post(RESERVATION_URL, reservationData);
  }

  updateReservation(id: string, reservationData: any): Observable<any> {
    return this.http.put(`${RESERVATION_URL}/${id}`, reservationData);
  }

  deleteReservation(id: string): Observable<any> {
    return this.http.delete(`${RESERVATION_URL}/${id}`);
  }
}
