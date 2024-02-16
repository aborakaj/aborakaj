import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOM_URL } from '../shared/constants/url';
import { AuthService } from '../core/services/auth.service';

export interface Room {
  id: string;
  name: string;
  desks: Desk[];
}

export interface Desk {
  id: string;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(ROOM_URL);
  }

  getRoomsById(id: string): Observable<Room> {
    return this.http.get<Room>(`${ROOM_URL}/${id}`)
  }
}
