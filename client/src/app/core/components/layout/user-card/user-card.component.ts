import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.less',
})
export class UserCardComponent {}
