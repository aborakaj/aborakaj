import { Room } from './room.interface';

export interface Floor {
  id: string;
  name: string;
  capacity: number;
  location: string;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
  rooms: Room[];
}

export type FloorDTO = Omit<Floor, 'id' | 'createdAt' | 'updatedAt' | 'rooms'>;