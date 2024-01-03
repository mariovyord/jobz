import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

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
}
