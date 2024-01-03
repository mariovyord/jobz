import { Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../../../core/services/user/user.service';
@Component({
  selector: 'app-auth-avatar',
  standalone: true,
  imports: [NzAvatarModule, NzButtonModule, AsyncPipe],
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
}
