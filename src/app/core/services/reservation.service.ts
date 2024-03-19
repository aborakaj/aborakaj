import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RESERVATION_URL } from '../../shared/constants/url';
import { ReservationEvent } from '../../shared/components/reservation-calendar/event-utils';
import { Reservation } from '../models/reservation.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  getReservation(): Observable<any> {
    return this.http.get(RESERVATION_URL);
  }

  getReservationsAsEvents(): Observable<ReservationEvent[]> {
    return this.http.get<Reservation[]>(RESERVATION_URL).pipe(
      map((reservations: Reservation[]) => {
        const eventReservations: ReservationEvent[] = [];
        reservations.map((reservation: Reservation) => {
          eventReservations.push({
            id: reservation.id,
            title: `${reservation.user.firstName} ${reservation.user.lastName}`,
            start: reservation.startTime,
            end: reservation.endTime,
            extendedProps: {
              roomId: reservation.desk.roomId,
            },
          });
        });
        return eventReservations;
      })
    );
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
