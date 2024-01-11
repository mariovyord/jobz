import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsDescriptionComponent } from './job-details-description.component';

describe('JobDetailsDescriptionComponent', () => {
  let component: JobDetailsDescriptionComponent;
  let fixture: ComponentFixture<JobDetailsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailsDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
