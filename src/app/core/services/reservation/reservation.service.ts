import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESERVATION_URL } from '../../../shared/constants/url';
import { Reservation } from '../../models/reservation.interface';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private apiService: ApiService, private router: Router) {}

  getReservation(): Observable<Reservation[]> {
    return this.apiService.getAll<Reservation[]>(RESERVATION_URL);
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.apiService.getOne<Reservation>(RESERVATION_URL, id);
  }

  submitReservation(reservationData: any): Observable<any> {
    return this.apiService.add<Reservation, any>(
      RESERVATION_URL,
      reservationData
    );
  }

  updateReservation(id: string, reservationData: any): Observable<any> {
    return this.apiService.update<Reservation, any>(
      RESERVATION_URL,
      id,
      reservationData
    );
  }

  deleteReservation(id: string): Observable<Reservation> {
    return this.apiService.delete<Reservation>(RESERVATION_URL, id);
  }
}
