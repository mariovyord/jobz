import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, of, shareReplay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  public isSmallScreen$ = this.observer.observe(Breakpoints.Handset).pipe(
    switchMap((x) => {
      return of(x.matches);
    }),
    shareReplay(1)
  );

  constructor(private observer: BreakpointObserver) {}
}
