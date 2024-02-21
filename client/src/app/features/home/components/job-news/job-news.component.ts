import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-job-news',
  standalone: true,
  imports: [],
  templateUrl: './job-news.component.html',
  styleUrl: './job-news.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobNewsComponent {}
