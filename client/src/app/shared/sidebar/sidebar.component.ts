import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NzIconModule, NzLayoutModule, NzMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less',
})
export class SidebarComponent {
  public isCollapsed = false;
}
