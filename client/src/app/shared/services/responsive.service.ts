import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  public isSmallScreen$ = this.observer.observe(Breakpoints.Handset).pipe(
    switchMap((x) => {
      return of(x.matches);
    })
  );

  constructor(private observer: BreakpointObserver) {}
}
