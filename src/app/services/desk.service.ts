import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DESKS_URL } from '../shared/constants/url';
import { AuthService } from '../core/services/auth.service';

export interface Desk {
  id: string;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  constructor(private http: HttpClient, private authService: AuthService) { }

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

  getDesks(): Observable<Desk[]> {
    return this.http.get<Desk[]>(DESKS_URL, this.getHeaders());
  }

  getDeskById(id: string): Observable<Desk> {
    return this.http.get<Desk>(`${DESKS_URL}/${id}`, this.getHeaders());
  }
}
