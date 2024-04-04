import { Injectable } from '@angular/core';
import { ReservationService } from './reservation.service';
import { BehaviorSubject, Observable, catchError, concatMap, map, switchMap, take, tap } from 'rxjs';
import { Reservation } from '../../models/reservation.interface';
import { ReservationEvent } from '../../models/reservation.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservationStoreService {
  private reservationsSubject = new BehaviorSubject<Reservation[]>([]);
  public reservations$: Observable<Reservation[]> = this.reservationsSubject
    .asObservable()
  public reservationsAsEvents$: Observable<ReservationEvent[]> =
    this.reservationsSubject
      .asObservable()
      .pipe(map<Reservation[], ReservationEvent[]>(this.reservationsToEvents));

  constructor(private readonly reservationService: ReservationService) {
    this.getReservations()
      .subscribe({
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
    this.reservationService.submitReservation(reservation).pipe(
      take(1),
      concatMap((_value: Reservation) => this.getReservations())
    ).subscribe((reservations: Reservation[]) => {
        this.reservationsSubject.next(reservations);
      });
  }

  private getReservations(): Observable<Reservation[]>{
    return this.reservationService.getReservation().pipe(take(1));
  }
}
