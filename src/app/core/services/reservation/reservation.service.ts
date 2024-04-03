import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RESERVATION_URL } from '../../../shared/constants/url';
import { Reservation } from '../../models/reservation.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  getReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(RESERVATION_URL);
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${RESERVATION_URL}/${id}`);
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
