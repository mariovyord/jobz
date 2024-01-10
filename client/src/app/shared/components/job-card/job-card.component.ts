import { BreakpointObserver } from '@angular/cdk/layout';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    NgOptimizedImage,
  ],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.less',
})
export class JobCardComponent {}
