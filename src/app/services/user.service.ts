import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_URL } from '../shared/constants/url';
import { Reservation } from './reservation.service';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  reservation: Reservation[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(USER_URL);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${USER_URL}/${id}`);
  }

}
