import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
@Component({
  selector: 'app-thread-body',
  standalone: true,
  imports: [NzCardModule],
  templateUrl: './thread-body.component.html',
  styleUrl: './thread-body.component.less',
})
export class ThreadBodyComponent {}
