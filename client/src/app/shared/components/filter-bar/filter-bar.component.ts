import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { FilterBottonSheetComponent } from '../filter-botton-sheet/filter-botton-sheet.component';
import { IFilterByType } from '../../types/filter';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBarComponent implements OnInit, OnChanges {
  public selectedCategories: { [key: string]: IFilterByType } = {};
  @Input({ required: true }) public filters: IFilterByType[] | null;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      this.updateSelectedCategories(params);
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters']) {
      this.updateSelectedCategories(this.route.snapshot.queryParams);
    }
  }

  private updateSelectedCategories(params: Params) {
    if (!this.filters) return;

    this.selectedCategories = {};

    for (let param of Object.keys(params)) {
      const filter = this.filters.find((x) => x.type === param);
      if (filter) {
        this.selectedCategories[param] = filter;
      }
    }

    this.cdr.markForCheck();
  }

  public openBottomSheet(filters: IFilterByType) {
    this._bottomSheet.open(FilterBottonSheetComponent, {
      data: filters,
    });
  }

  public clearFilters() {
    this.router.navigate([]);
  }
}
