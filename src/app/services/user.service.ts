import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_URL } from '../shared/constants/url';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(USER_URL);
  }
}
