import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IApiResponse } from './api-response';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService<T> {
  constructor(private http: HttpClient) {}

  abstract getPath(): string;

  protected getOne$(id: string): Observable<T> {
    const url = `${environment.baseUrl}/${this.getPath()}/${id}`;
    return this.http.get<IApiResponse<T>>(url).pipe(map((x) => x.body));
  }

  protected getAll$(): Observable<T[]> {
    const url = `${environment.baseUrl}/${this.getPath()}`;
    return this.http.get<IApiResponse<T[]>>(url).pipe(map((x) => x.body));
  }

  protected post$(body: T): Observable<T> {
    const url = `${environment.baseUrl}/${this.getPath()}`;
    return this.http.post<IApiResponse<T>>(url, body).pipe(map((x) => x.body));
  }

  protected put$(id: string, body: T): Observable<T> {
    const url = `${environment.baseUrl}/${this.getPath()}/${id}`;
    return this.http.put<IApiResponse<T>>(url, body).pipe(map((x) => x.body));
  }

  protected delete$(id: string): Observable<void> {
    const url = `${environment.baseUrl}/${this.getPath()}/${id}`;
    return this.http.delete<void>(url);
  }
}
