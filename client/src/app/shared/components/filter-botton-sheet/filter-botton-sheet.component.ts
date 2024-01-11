import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import {
  MatChipSelectionChange,
  MatChipsModule,
} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IFilterOption } from '../../types/filter';
import { AsyncPipe } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'app-filter-botton-sheet',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatChipsModule,
    AsyncPipe,
    TranslateModule,
  ],
  templateUrl: './filter-botton-sheet.component.html',
  styleUrl: './filter-botton-sheet.component.less',
})
export class FilterBottonSheetComponent implements OnInit {
  public selectedFilters: { [key: string]: IFilterOption } = {};

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { title: string; options: IFilterOption[] },
    private _bottomSheetRef: MatBottomSheetRef<FilterBottonSheetComponent>,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      const category = params[this.data.title];
      if (!category) return;

      const selected = category.split('+');

      for (let param of selected) {
        const selected = this.data.options.find((x) => x.key === param);

        if (selected) {
          this.selectedFilters[selected.key] = selected;
        }
      }
    });
  }

  public close(): void {
    this._bottomSheetRef.dismiss();
  }

  public chipSelectionChange(chipEvent: MatChipSelectionChange, option: any) {
    if (chipEvent.selected) {
      this.selectedFilters[option.key] = option;
    } else {
      delete this.selectedFilters[option.key];
    }
  }

  public getParams() {
    if (Object.keys(this.selectedFilters).length === 0) {
      return null;
    }

    return {
      [this.data.title]: Object.values(this.selectedFilters)
        .map((y) => y.key)
        .join('+'),
    };
  }
}
