import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trends',
  standalone: true,
  imports: [],
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendsComponent {}
