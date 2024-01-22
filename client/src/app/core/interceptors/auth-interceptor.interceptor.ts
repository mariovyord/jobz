import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable, catchError, switchMap, take } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public userService: UserService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.userService.getUserToken().pipe(
      take(1),
      catchError(() => {
        return next.handle(httpRequest);
      }),
      switchMap((token) => {
        if (token && typeof token === 'string') {
          this.userService.refreshTokenSilentlyIfNeeded(token);

          const clone = httpRequest.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });

          return next.handle(clone);
        }

        return next.handle(httpRequest);
      })
    );
  }
}
