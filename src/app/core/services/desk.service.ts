import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DESKS_URL } from '../../shared/constants/url';
import { AuthService } from './auth.service';

export interface Desk {
  id: string;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  constructor(private http: HttpClient) { }

  getDesks(): Observable<Desk[]> {
    return this.http.get<Desk[]>(DESKS_URL);
  }

  getDeskById(id: string): Observable<Desk> {
    return this.http.get<Desk>(`${DESKS_URL}/${id}`);
  }
}
