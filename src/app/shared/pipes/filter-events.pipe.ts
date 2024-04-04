import { Pipe, PipeTransform } from '@angular/core';
import { ReservationEvent } from '../../core/models/reservation.interface';

@Pipe({
  name: 'filterEvents',
  standalone: true
})
export class FilterEventsPipe implements PipeTransform {

  transform(value: ReservationEvent[] | null, roomId: string | null): ReservationEvent[] {
    if (!roomId || !value) return value ? value : [];
    return value.filter(event => event.extendedProps?.roomId === roomId)
  }

}
