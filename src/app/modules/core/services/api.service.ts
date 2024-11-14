import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.api;
  }

  public Get<T>(endpoint: string): Observable<T> {
    return this.httpClient
      .get<T>(`${this.apiUrl}${endpoint}`, {
        responseType: 'json',
      })
      .pipe(shareReplay());
  }

  public Post<T>(endpoint: string, body: unknown = {}): Observable<T> {
    //
    return this.httpClient.post<T>(`${this.apiUrl}${endpoint}`, body, {
      responseType: 'json',
    });
  }


  public Put<T>(endpoint: string, body: unknown = {}): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}${endpoint}`, body, {
      responseType: 'json',
    });
  }

  public Patch<T>(endpoint: string, body: unknown = {}): Observable<T> {
    return this.httpClient.patch<T>(`${this.apiUrl}${endpoint}`, body, {
      responseType: 'json',
    });
  }

  public Delete<T>(endpoint: string, id: unknown = {}): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiUrl}${endpoint}`, {
      responseType: 'json',
    });
  }
}
