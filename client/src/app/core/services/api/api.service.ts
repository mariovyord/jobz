import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService<T> {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  abstract getPath(): string;

  protected getOne$(id: string): Observable<T> {
    const url = `${this.baseUrl}/${this.getPath()}/${id}`;
    return this.http.get<T>(url);
  }

  protected getAll$(): Observable<T[]> {
    const url = `${this.baseUrl}/${this.getPath()}`;
    return this.http.get<T[]>(url);
  }
}
