import { Desk } from "../services/room.service";
import { User } from "../services/user.service";

export interface Reservation {
    id: string;
    startTime: string;
    endTime: string;
    userId: string;
    deskId: string;
    action: string;
    createdBy: string;
    user: User[];
    desk: Desk[];
  }