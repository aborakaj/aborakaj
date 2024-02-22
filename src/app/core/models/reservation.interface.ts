import { Desk } from "./desk.interface";
import { User } from "./user.interface";

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