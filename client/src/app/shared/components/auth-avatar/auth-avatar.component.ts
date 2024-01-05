import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../../../core/services/user/user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-auth-avatar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    AsyncPipe,
    NgOptimizedImage,
    MatMenuModule,
  ],
  templateUrl: './auth-avatar.component.html',
  styleUrl: './auth-avatar.component.less',
})
export class AuthAvatarComponent {
  public isAuthenticated$ = this.userService.isAuthenticated$;
  public user$ = this.userService.user$;

  constructor(public userService: UserService) {}

  public signIn(): void {
    this.userService.loginWithRedirect();
  }

  public signOut(): void {
    this.userService.signOut();
  }
}
