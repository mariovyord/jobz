import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

/*
 *
 * Delays the http requests for a given duration
 *
 **/
@Injectable()
export class DelayInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if it's production mode
    if (environment.production) {
      // If it is, bypass the delay and handle the request immediately
      return next.handle(req);
    } else {
      // If it's not production (i.e., development), apply a random delay
      const delayDuration = Math.random() * 1000;
      console.log(
        '[HTTP Delay Library] HTTP request delayed by',
        (delayDuration / 1000).toFixed(2),
        'seconds'
      );

      return of(null).pipe(
        // Use delay here before proceeding with the request
        delay(delayDuration),
        mergeMap(() => next.handle(req))
      );
    }
  }
}
