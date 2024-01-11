import { Component, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-filter-botton-sheet',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatChipsModule,
  ],
  templateUrl: './filter-botton-sheet.component.html',
  styleUrl: './filter-botton-sheet.component.less',
})
export class FilterBottonSheetComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { title: string; options: any[] },
    private _bottomSheetRef: MatBottomSheetRef<FilterBottonSheetComponent>
  ) {}

  public close(): void {
    this._bottomSheetRef.dismiss();
  }
}
