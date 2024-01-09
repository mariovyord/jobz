import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBottonSheetComponent } from './filter-botton-sheet.component';

describe('FilterBottonSheetComponent', () => {
  let component: FilterBottonSheetComponent;
  let fixture: ComponentFixture<FilterBottonSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterBottonSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterBottonSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
