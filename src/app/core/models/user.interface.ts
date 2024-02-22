import { Reservation } from './reservation.interface';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  reservation: Reservation[];
}
