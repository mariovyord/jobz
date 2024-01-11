import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-job-details-sideinfo',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './job-details-sideinfo.component.html',
  styleUrl: './job-details-sideinfo.component.less',
})
export class JobDetailsSideinfoComponent {}
