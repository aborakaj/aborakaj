import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOM_URL } from '../../shared/constants/url';
import { Room } from '../models/room.interface';


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
