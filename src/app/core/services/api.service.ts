import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAll<T>(url: string) {
    return this.http.get<T>(url).pipe(catchError(this.handleErrors));
  }

  public getOne<T>(url: string, id: string) {
    return this.http.get<T>(`${url}/${id}`).pipe(catchError(this.handleErrors));
  }

  public add<T>(url: string, payload: T) {
    return this.http.post<T>(url, payload).pipe(catchError(this.handleErrors));
  }

  public delete<T>(url: string, id: string) {
    return this.http
      .delete<T>(`${url}/${id}`)
      .pipe(catchError(this.handleErrors));
  }

  public update<T, U = {}>(url: string, id: string, payload: U) {
    return this.http
      .put<T>(`${url}/${id}`, payload)
      .pipe(catchError(this.handleErrors));
  }

  private handleErrors(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error('Something went wrong'));
  }
}
