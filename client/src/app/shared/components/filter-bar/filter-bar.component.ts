import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { FilterBottonSheetComponent } from '../filter-botton-sheet/filter-botton-sheet.component';
import { IFilter, IFilterOption } from '../../types/filter';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [
    MatChipsModule,
    MatButtonModule,
    MatBottomSheetModule,
    TranslateModule,
  ],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.less',
})
export class FilterBarComponent implements OnInit {
  public selectedCategories: { [key: string]: IFilter } = {};

  @Input({ required: true }) filters: IFilter[];

  constructor(
    private _bottomSheet: MatBottomSheet,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      this.selectedCategories = {};

      for (let param of Object.keys(params)) {
        const filter = this.filters.find((x) => x.key === param);
        if (filter) {
          this.selectedCategories[param] = filter;
        }
      }
    });
  }

  public openBottomSheet(title: string, options: IFilterOption[]) {
    this._bottomSheet.open(FilterBottonSheetComponent, {
      data: { title, options },
    });
  }

  public clearFilters() {}
}
