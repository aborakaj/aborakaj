import { Desk } from './desk.interface';

export interface Room {
  id: string;
  name: string;
  desks: Desk[];
}
