import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockFilters } from '../../mocks/filters.mock';

// TODO: Save filters to localStorage and reuse them
@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  public getJobFilters$() {
    const filters = [
      'domain',
      'tech-stack',
      'key-words',
      'type',
      'job-interview',
      'remote-work',
      'domain',
      'level',
      'expirience',
      'from',
      'pay',
      'time-off',
      'languages',
      'refugee-status',
      'date',
    ];

    return this.getFilters$(filters);
  }

  public getBlogFilters$() {
    const filters = ['date'];
    return this.getFilters$(filters);
  }

  public getFilters$(filterKeys: string[]): Observable<any> {
    const filtered = mockFilters.filter((f) => filterKeys.includes(f.key));
    return of(filtered);
  }
}
