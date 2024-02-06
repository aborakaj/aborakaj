import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ROOM_URL } from '../shared/constants/url';

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
  

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders() {
    const token = this.authService.getToken();
    if (token) {
      return {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
    } else {
      throw new Error('Authentication token not found');
    }
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(ROOM_URL, this.getHeaders());
  }

  getRoomsById(id: string): Observable<Room> {
    return this.http.get<Room>(`${ROOM_URL}/${id}`, this.getHeaders())
  }
}
