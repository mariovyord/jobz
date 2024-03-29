import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-companies',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './top-companies.component.html',
  styleUrl: './top-companies.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopCompaniesComponent {
  public topCompanies = [
    'banana',
    'bapple',
    'fake',
    'frontier',
    'metflix',
    'moogle',
    'nicrosoft'
  ];

  @Input() public title = '';
}
