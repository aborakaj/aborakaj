import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { RESERVATION_URL } from '../../../shared/constants/url';
import { Reservation } from '../../models/reservation.interface';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  url = RESERVATION_URL;
  constructor(private apiService: ApiService, private router: Router) {}

  getReservation(): Observable<Reservation[]> {
    return this.apiService.getAll<Reservation[]>(this.url);
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.apiService.getOne<Reservation>(this.url, id);
  }

  submitReservation(reservationData: any): Observable<any> {
    return this.apiService.add<Reservation, any>(
      RESERVATION_URL,
      reservationData
    );
  }

  updateReservation(id: string, reservationData: any): Observable<any> {
    return this.apiService.update<Reservation, any>(
      this.url,
      id,
      reservationData
    );
  }

  deleteReservation(id: string): Observable<Reservation> {
    return this.apiService.delete<Reservation>(this.url, id);
  }
}
