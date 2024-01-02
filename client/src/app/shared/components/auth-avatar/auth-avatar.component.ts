import { Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserService } from '../../services/user/user.service';
import { AsyncPipe } from '@angular/common';
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

  constructor(public userService: UserService) {
    this.isAuthenticated$.subscribe((x) => {
      console.log('is', x);
    });

    this.user$.subscribe((x) => {
      console.log(x);
    });
  }

  public signIn(): void {
    console.log(window.location.origin);
    this.userService.loginWithRedirect();
  }
}
