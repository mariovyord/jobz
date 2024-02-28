import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService<T> {
  constructor(private http: HttpClient) {}

  abstract getPath(): string;

  protected getOne$(id: string): Observable<T> {
    const url = `${environment.baseUrl}/${this.getPath()}/${id}`;
    return this.http.get<T>(url);
  }

  protected getAll$(queryParams?: Params): Observable<T[]> {
    let url = `${environment.baseUrl}/${this.getPath()}`;

    if (!queryParams) return this.http.get<T[]>(url);

    if (queryParams && Object.keys(queryParams).length > 0) {
      const q = [];

      for (const key in queryParams) {
        q.push(`${key}=${queryParams[key]}`);
      }

      url = url + '?' + q.join('&');
    }

    return this.http.get<T[]>(url);
  }

  protected post$(body: T): Observable<T> {
    const url = `${environment.baseUrl}/${this.getPath()}`;
    return this.http.post<T>(url, body);
  }

  protected put$(id: string, body: T): Observable<T> {
    const url = `${environment.baseUrl}/${this.getPath()}/${id}`;
    return this.http.put<T>(url, body);
  }

  protected delete$(id: string): Observable<void> {
    const url = `${environment.baseUrl}/${this.getPath()}/${id}`;
    return this.http.delete<void>(url);
  }

  protected getCount$(queryParams: Params = []): Observable<number> {
    let url = `${environment.baseUrl}/${this.getPath()}`;

    const q = [];

    for (const key in queryParams) {
      q.push(`${key}=${queryParams[key]}`);
    }

    q.push('count=1');

    url = url + '?' + q.join('&');

    return this.http.get<number>(url);
  }
}
