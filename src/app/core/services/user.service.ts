import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_URL } from '../../shared/constants/url';
import { User } from '../models/user.interface';


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

  submitUser(userData: any): Observable<any> {
    return this.http.post(USER_URL, userData);
  }

  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(`${USER_URL}/${id}`, userData);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${USER_URL}/${id}`);
  }

}
