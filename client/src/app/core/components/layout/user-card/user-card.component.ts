import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgOptimizedImage, AsyncPipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.less'
})
export class UserCardComponent {
  public user$ = this.userService.user$;

  constructor(private userService: UserService) {}
}
