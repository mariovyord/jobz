import { Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-auth-avatar',
  standalone: true,
  imports: [NzAvatarModule, NzButtonModule],
  templateUrl: './auth-avatar.component.html',
  styleUrl: './auth-avatar.component.less',
})
export class AuthAvatarComponent {}
