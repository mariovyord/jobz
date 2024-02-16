import { Component } from '@angular/core';
import { CompanyHeaderComponent } from '../../shared/components/company-header/company-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CompaniesService } from './services/companies.service';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [
    CompanyHeaderComponent,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [CompaniesService],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.less',
})
export class CompanyDetailsComponent {}
