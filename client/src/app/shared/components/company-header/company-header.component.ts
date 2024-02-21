import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICompany } from '../../types/company';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-company-header',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './company-header.component.html',
  styleUrl: './company-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyHeaderComponent {
  @Input({ required: true }) public company: ICompany | null;
}
