import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface ILink {
  url: string;
  title: string;
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatTabsModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less',
})
export class DetailsComponent implements OnInit {
  public jobId: string;
  public companyId: string;
  public activeLink: string;
  public links: ILink[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.route.data.subscribe(({ details }) => {
      this.jobId = details.job.id;
      this.companyId = details.company.id;
      this.setLinks(this.jobId, this.companyId);
    });

    this.route.paramMap.subscribe(() => {
      this.activeLink = this.router.url;
    });
  }

  public setLinks(jobId: string, companyId: string) {
    this.links = [
      {
        url: `/jobs/${jobId}`,
        title: 'Обява',
      },
      {
        url: `/jobs/${jobId}/${companyId}`,
        title: 'За нас',
      },
      {
        url: `/jobs/${jobId}/${companyId}/jobs`,
        title: 'Всички обяви (3)',
      },
    ];
  }
}
