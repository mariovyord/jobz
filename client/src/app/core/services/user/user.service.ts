import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { take } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

const jwtHelperService = new JwtHelperService();

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isAuthenticated$ = this.auth.isAuthenticated$;
  public user$ = this.auth.user$;

  constructor(public auth: AuthService) {}

  public loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  public signOut(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }

  public getUserToken() {
    return this.auth.getAccessTokenSilently();
  }

  public refreshTokenSilentlyIfNeeded(accessToken: string): void {
    const expirationDate = jwtHelperService.getTokenExpirationDate(accessToken);

    if (expirationDate === null) return;

    const currentDate = new Date();
    const timeDifference = expirationDate?.getTime() - currentDate.getTime();
    const fiveMinutesInMillis = 5 * 60 * 1000;
    const shouldRefreshToken = timeDifference <= fiveMinutesInMillis;
    if (!shouldRefreshToken) return;
    /**
     * Refresh the tokens silently if there are less than 5 minutes left to expiration
     */
    this.auth
      .getAccessTokenSilently({ cacheMode: 'off' })
      .pipe(take(1), untilDestroyed(this))
      .subscribe();
  }
}
