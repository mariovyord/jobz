import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

interface ILink {
  url: string;
  title: string;
}

@UntilDestroy()
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatTabsModule, RouterModule, TranslateModule],
  providers: [TranslatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less'
})
export class DetailsComponent implements OnInit {
  public jobId: string;
  public companyId: string;
  public links: ILink[] = [];

  constructor(
    private route: ActivatedRoute,
    private translate: TranslatePipe
  ) {}

  public ngOnInit(): void {
    this.route.data.pipe(untilDestroyed(this)).subscribe(({ details }) => {
      this.jobId = details.job.id;
      this.companyId = details.company.id;
      this.setLinks(this.jobId, this.companyId);
    });
  }

  public setLinks(jobId: string, companyId: string) {
    this.links = [
      {
        url: `/jobs/${jobId}`,
        title: this.translate.transform('job-offers-cap')
      },
      {
        url: `/jobs/${jobId}/${companyId}`,
        title: this.translate.transform('about-us')
      },
      {
        url: `/jobs/${jobId}/${companyId}/jobs`,
        title: this.translate.transform('all-job-offers-cap', { value: 3 })
      }
    ];
  }
}
