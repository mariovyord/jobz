import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-jobs-count-strip',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './jobs-count-strip.component.html',
  styleUrl: './jobs-count-strip.component.less',
})
export class JobsCountStripComponent {
  @Input({ required: true }) public allJobsCount: number | null;
  @Input({ required: true }) public allJobsCountToday: number | null;
}
