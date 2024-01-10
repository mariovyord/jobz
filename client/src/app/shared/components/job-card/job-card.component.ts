import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule, RouterModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.less',
})
export class JobCardComponent {}
