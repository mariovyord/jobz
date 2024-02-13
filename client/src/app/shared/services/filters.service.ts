import { Injectable } from '@angular/core';
import { Observable, filter, map, of, switchMap, tap } from 'rxjs';
import { DataService } from '../../core/services/api/data.service';
import { IFilter, IFilterByType } from '../types/filter';

// TODO: Save filters to localStorage and reuse them
@Injectable({
  providedIn: 'root',
})
export class FiltersService extends DataService<IFilter> {
  override getPath(): string {
    return 'filters';
  }

  private filters: IFilter[];

  public getAllFiltersByType$(): Observable<IFilterByType[]> {
    return this.getAll$().pipe(
      map(this.groupByType),
      map((v) => Object.values(v))
    );
  }

  public getFiltersOfTypes$(...types: string[]): Observable<IFilterByType[]> {
    return this.getAll$().pipe(
      switchMap((f) => of(this.getFiltersOfTypes(f, types)))
    );
  }

  private getFiltersOfTypes(
    filters: IFilter[],
    types: string[]
  ): IFilterByType[] {
    const res: IFilterByType[] = [];

    const reduced = this.groupByType(filters);
    for (const type of types) {
      if (reduced[type]) {
        res.push(reduced[type]);
      }
    }

    return res;
  }

  private groupByType(filters: IFilter[]): Record<string, IFilterByType> {
    return filters.reduce((acc: Record<string, IFilterByType>, x: IFilter) => {
      if (!acc[x.type]) {
        acc[x.type] = {
          type: x.type,
          options: [],
        };
      }

      acc[x.type].options.push(x);

      return acc;
    }, {});
  }
}
