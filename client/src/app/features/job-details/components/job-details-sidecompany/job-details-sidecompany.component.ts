import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-job-details-sidecompany',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './job-details-sidecompany.component.html',
  styleUrl: './job-details-sidecompany.component.less',
})
export class JobDetailsSidecompanyComponent {}
