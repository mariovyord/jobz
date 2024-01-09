import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { filters } from './utils';
import { FilterBottonSheetComponent } from '../filter-botton-sheet/filter-botton-sheet.component';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [MatChipsModule, MatButtonModule, MatBottomSheetModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.less',
})
export class FilterBarComponent {
  public filters = filters;

  constructor(private _bottomSheet: MatBottomSheet) {}

  public openBottomSheet() {
    this._bottomSheet.open(FilterBottonSheetComponent);
  }

  public clearFilters() {}
}
