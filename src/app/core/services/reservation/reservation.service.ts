import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { RESERVATION_URL } from '../../../shared/constants/url';
import { Reservation } from '../../models/reservation.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient, private router: Router) {}

  getReservation(): Observable<Reservation[]> {
    return this.http
      .get<Reservation[]>(RESERVATION_URL)
      .pipe(catchError(this.handleErrors));
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.http
      .get<Reservation>(`${RESERVATION_URL}/${id}`)
      .pipe(catchError(this.handleErrors));
  }

  submitReservation(reservationData: any): Observable<any> {
    return this.http
      .post<Reservation>(RESERVATION_URL, reservationData)
      .pipe(catchError(this.handleErrors));
  }

  updateReservation(id: string, reservationData: any): Observable<any> {
    return this.http
      .put(`${RESERVATION_URL}/${id}`, reservationData)
      .pipe(catchError(this.handleErrors));
  }

  deleteReservation(id: string): Observable<any> {
    return this.http
      .delete(`${RESERVATION_URL}/${id}`)
      .pipe(catchError(this.handleErrors));
  }

  private handleErrors(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error('Something went wrong'));
  }
}
