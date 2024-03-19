import { Desk } from './desk.interface';

export interface Room {
  id: string;
  name: string;
  desks: Desk[];
}

export interface RoomSelected extends Omit<Room, 'desks'> {}
