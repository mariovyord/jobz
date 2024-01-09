import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-secondary-nav',
  standalone: true,
  imports: [MatToolbarModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './secondary-nav.component.html',
  styleUrl: './secondary-nav.component.less',
})
export class SecondaryNavComponent {}
