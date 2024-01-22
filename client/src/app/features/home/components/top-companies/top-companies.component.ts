import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-companies',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './top-companies.component.html',
  styleUrl: './top-companies.component.less',
})
export class TopCompaniesComponent {
  public rows = new Array(4);

  @Input() public title = '';
}