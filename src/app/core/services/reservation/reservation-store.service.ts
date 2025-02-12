import { Injectable } from '@angular/core';
import { ReservationService } from './reservation.service';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import {
  Reservation,
  ReservationDTO,
} from '../../models/reservation.interface';
import { ReservationEvent } from '../../models/reservation.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ReservationStoreService {
  private reservationsSubject = new BehaviorSubject<Reservation[]>([]);
  private reservationErrors = new BehaviorSubject<string | null>(null);

  public reservationErrors$ = this.reservationErrors.asObservable();
  public reservations$: Observable<Reservation[]> =
    this.reservationsSubject.asObservable();
  public reservationsAsEvents$: Observable<ReservationEvent[]> =
    this.reservationsSubject
      .asObservable()
      .pipe(map<Reservation[], ReservationEvent[]>(this.reservationsToEvents));

  constructor(
    private readonly reservationService: ReservationService,
    private readonly router: Router
  ) {
    this.getReservations();
  }

  private reservationsToEvents(
    reservations: Reservation[]
  ): ReservationEvent[] {
    return reservations.map((reservation: Reservation) => {
      return {
        id: reservation.id,
        title: `${reservation.user.firstName} ${reservation.user.lastName}`,
        start: reservation.startTime,
        end: reservation.endTime,
        extendedProps: {
          roomId: reservation.desk.roomId,
        },
      };
    });
  }

  addReservation(reservation: ReservationDTO) {
    this.reservationService
      .submitReservation(reservation)
      .pipe(take(1))
      .subscribe({
        next: (_reservation: ReservationDTO) => {
          this.getReservations();
        },
        error: (err) => this.reservationErrors.next(err),
      });
  }

  deleteReservation(reservationId: string) {
    this.reservationService
      .deleteReservation(reservationId)
      .pipe(take(1))
      .subscribe({
        next: (_reservation: Reservation) => this.getReservations(),
        error: (err) => this.reservationErrors.next(err),
      });
  }

  getReservationById(reservationId: string): Reservation | undefined {
    return this.reservationsSubject
      .getValue()
      .find((reservation: Reservation) => reservation.id === reservationId);
  }

  updateReservation(
    reservationId: string,
    reservationData: { startTime: string; endTime: string }
  ) {
    this.reservationService
      .updateReservation(reservationId, reservationData)
      .pipe(take(1))
      .subscribe({
        next: (_reservations: ReservationDTO) => {
          this.getReservations();
        },
        error: (err: Error) => this.reservationErrors.next(err.message),
      });
  }

  private getReservations() {
    this.reservationService
      .getReservation()
      .pipe(take(1))
      .subscribe({
        next: (reservations: Reservation[]) =>
          this.reservationsSubject.next(reservations),
        error: (err) => this.reservationErrors.next(err.message),
      });
  }
}
