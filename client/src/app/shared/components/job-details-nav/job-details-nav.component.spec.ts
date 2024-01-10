import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsNavComponent } from './job-details-nav.component';

describe('JobDetailsNavComponent', () => {
  let component: JobDetailsNavComponent;
  let fixture: ComponentFixture<JobDetailsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailsNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDetailsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
