import { Injectable } from '@angular/core';
import { ReservationService } from './reservation.service';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { Reservation } from '../../models/reservation.interface';
import { ReservationEvent } from '../../../shared/components/reservation-calendar/event-utils';

@Injectable({
  providedIn: 'root',
})
export class ReservationStoreService {
  private reservationsSubject = new BehaviorSubject<Reservation[]>([]);
  public reservations$: Observable<Reservation[]> =
    this.reservationsSubject.asObservable();
  public reservationsAsEvents$: Observable<ReservationEvent[]> =
    this.reservationsSubject.asObservable().pipe(
      map<Reservation[], ReservationEvent[]>(this.reservationsToEvents)
    );

  constructor(private readonly reservationService: ReservationService) {
    this.reservationService
      .getReservation()
      .pipe(take(1))
      .subscribe({
        next: (reservations) => this.reservationsSubject.next(reservations),
      });
  }

  private reservationsToEvents(reservations: Reservation[]): ReservationEvent[] {
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
}
