import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { IJob } from '../../../../../../shared/types/job';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-details-sideinfo',
  standalone: true,
  imports: [MatListModule, MatIconModule, TranslateModule, DatePipe],
  templateUrl: './job-details-sideinfo.component.html',
  styleUrl: './job-details-sideinfo.component.less'
})
export class JobDetailsSideinfoComponent {
  @Input({ required: true }) public job: IJob | null;
  @Input({ required: true }) public isLoading: boolean | null;
}
