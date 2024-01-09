import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCountStripComponent } from './jobs-count-strip.component';

describe('JobsCountStripComponent', () => {
  let component: JobsCountStripComponent;
  let fixture: ComponentFixture<JobsCountStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsCountStripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsCountStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
