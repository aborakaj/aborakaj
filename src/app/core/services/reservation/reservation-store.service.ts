import { Injectable } from '@angular/core';
import { ReservationService } from './reservation.service';
import {
  BehaviorSubject,
  Observable,
  catchError,
  concat,
  map,
  take,
  throwError,
} from 'rxjs';
import { Reservation } from '../../models/reservation.interface';
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
    this.getReservations().subscribe({
      next: (reservations) => this.reservationsSubject.next(reservations),
    });
  }

  private reservationsToEvents(
    reservations: Reservation[]
  ): ReservationEvent[] {
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
  }

  addReservation(reservation: any) {
    concat(
      this.reservationService.submitReservation(reservation),
      this.getReservations()
    )
      .pipe(take(1))
      .subscribe({
        next: (reservations: Reservation[]) => {
          this.reservationsSubject.next(reservations);
        },
        error: (err) => this.reservationErrors.next(err),
      });
  }

  deleteReservation(reservationId: string) {
    concat(
      this.reservationService.deleteReservation(reservationId),
      this.getReservations()
    )
      .pipe(take(1))
      .subscribe({
        next: (reservations: Reservation[]) =>
          this.reservationsSubject.next(reservations),
        error: (err) => this.reservationErrors.next(err),
      });
  }

  getReservationById(reservationId: string): Reservation | undefined {
    return this.reservationsSubject
      .getValue()
      .filter(
        (reservation: Reservation) => reservation.id === reservationId
      )[0];
  }

  updateReservation(reservationId: string, reservationData: any) {
    concat(
      this.reservationService.updateReservation(reservationId, reservationData),
      this.getReservations()
    )
      .pipe(take(1))
      .subscribe({
        next: (reservations: Reservation[]) => {
          this.reservationsSubject.next(reservations);
        },
        error: (err: Error) => this.reservationErrors.next(err.message),
      });
  }

  private getReservations(): Observable<Reservation[]> {
    return this.reservationService.getReservation().pipe(
      catchError((err) => {
        this.reservationErrors.next(err.message);
        return throwError(() => new Error(err));
      }),
      take(1)
    );
  }
}
