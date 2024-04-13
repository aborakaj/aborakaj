import { Pipe, PipeTransform } from '@angular/core';
import { ReservationEvent } from '../../core/models/reservation.interface';

@Pipe({
  name: 'filterEvents',
  standalone: true,
})
export class FilterEventsPipe implements PipeTransform {
  transform(
    reservations: ReservationEvent[] | null,
    roomId: string
  ): ReservationEvent[] {
    if (!reservations) return [];
    return reservations.filter(
      (reservation) => reservation.extendedProps?.roomId === roomId
    );
  }
}
