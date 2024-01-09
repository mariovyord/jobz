import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-secondary-nav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatBadgeModule,
  ],
  templateUrl: './secondary-nav.component.html',
  styleUrl: './secondary-nav.component.less',
})
export class SecondaryNavComponent {}
