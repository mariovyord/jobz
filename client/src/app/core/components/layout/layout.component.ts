import { Component } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { ResponsiveService } from '../../../shared/services/responsive.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    NgOptimizedImage,
    AsyncPipe,
    RouterModule,
    SidenavContentComponent
  ]
})
export class LayoutComponent {
  public isSmallScreen$ = this.responsiveService.isSmallScreen$;
  public isAuthenticated$ = this.userService.isAuthenticated$;

  constructor(
    private responsiveService: ResponsiveService,
    private userService: UserService
  ) {}

  public signIn(): void {
    this.userService.loginWithRedirect();
  }
}
