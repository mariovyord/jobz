import { Component } from '@angular/core';
import { SecondaryNavComponent } from '../../core/components/secondary-nav/secondary-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SecondaryNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomePageComponent {}
