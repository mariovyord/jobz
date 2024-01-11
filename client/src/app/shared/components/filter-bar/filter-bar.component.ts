import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { FilterBottonSheetComponent } from '../filter-botton-sheet/filter-botton-sheet.component';
import { IFilter, IFilterOption } from '../../types/filter';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [MatChipsModule, MatButtonModule, MatBottomSheetModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.less',
})
export class FilterBarComponent {
  @Input({ required: true }) filters: IFilter[];

  constructor(private _bottomSheet: MatBottomSheet) {}

  public openBottomSheet(title: string, options: IFilterOption[]) {
    this._bottomSheet.open(FilterBottonSheetComponent, {
      data: { title, options },
    });
  }

  public clearFilters() {}
}
