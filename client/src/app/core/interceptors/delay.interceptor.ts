import { Injectable, isDevMode } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

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
    if (!isDevMode()) {
      // If it is, bypass the delay and handle the request immediately
      return next.handle(req);
    }

    // If it's not production (i.e., development), apply a random delay
    const delayDuration = Math.random() * 5000;
    console.log(
      '[HTTP delay] HTTP request delayed by',
      (delayDuration / 1000).toFixed(2),
      'seconds'
    );

    return next.handle(req).pipe(delay(delayDuration));
  }
}
