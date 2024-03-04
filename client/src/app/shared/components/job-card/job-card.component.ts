import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IJob, TTech } from '@shared/interfaces/job';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    NgOptimizedImage,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardComponent {
  @Input({ required: true }) job: IJob;

  public trackTeckStack(index: number, techStack: TTech) {
    return techStack;
  }
}
