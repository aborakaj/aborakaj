import { Desk } from './desk.interface';
import { User } from './user.interface';

export interface Reservation {
  id: string;
  startTime: string;
  endTime: string;
  userId: string;
  deskId: string;
  action: string;
  createdBy: string;
  user: User;
  desk: Desk;
}

export type ReservationDTO = Omit<Reservation, 'desk' | 'id' | 'user'>;

export interface ReservationEvent {
  id: string;
  title?: string;
  start: string;
  end?: string;
  display?: string;
  isEditable?: boolean;
  eventDisplay?: string;
  extendedProps?: {
    comment?: string;
    roomId: string;
  };
}
