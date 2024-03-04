import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { IJob } from '@shared/interfaces/job';

@Component({
  selector: 'app-job-details-sidecompany',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    RouterModule
  ],
  templateUrl: './job-details-sidecompany.component.html',
  styleUrl: './job-details-sidecompany.component.less'
})
export class JobDetailsSidecompanyComponent {
  @Input({ required: true }) public job: IJob | null;
  @Input({ required: true }) public isLoading: boolean | null;
}
