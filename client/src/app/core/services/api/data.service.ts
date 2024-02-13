import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class DataService<T> {
  constructor(private http: HttpClient) {}

  abstract getPath(): string;

  protected getOne$(id: string): Observable<T> {
    const url = `${environment.baseUrl}/${this.getPath()}/${id}`;
    return this.http.get<T>(url);
  }

  protected getAll$(): Observable<T[]> {
    const url = `${environment.baseUrl}/${this.getPath()}`;
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
}
