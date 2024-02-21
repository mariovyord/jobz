import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollsComponent {}
