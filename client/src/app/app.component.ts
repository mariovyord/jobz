import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SecondaryNavComponent } from './core/components/secondary-nav/secondary-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent, SecondaryNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public isAuth0Loading$ = this.authService.isLoading$;

  constructor(private authService: AuthService) {}
}
