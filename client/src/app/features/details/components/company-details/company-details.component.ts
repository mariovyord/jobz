import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CompaniesService } from './services/companies.service';
import { CompanyHeaderComponent } from '../../../../shared/components/company-header/company-header.component';
import { ICompany } from '../../../../shared/types/company';
import { BehaviorSubject, Observable, mergeMap, of, tap } from 'rxjs';
import { JobsService } from '../../../../shared/services/jobs/jobs.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [
    CompanyHeaderComponent,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.less',
})
export class CompanyDetailsComponent {
  public company$: Observable<ICompany>;
  public isLoading$ = new BehaviorSubject(true);

  constructor(
    private companiesService: CompaniesService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('companyId');

    this.company$ = this.companiesService
      .getCompanyById$(companyId)
      .pipe(tap(() => this.isLoading$.next(false)));
  }
}
