import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsSideinfoComponent } from './job-details-sideinfo.component';

describe('JobDetailsSideinfoComponent', () => {
  let component: JobDetailsSideinfoComponent;
  let fixture: ComponentFixture<JobDetailsSideinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailsSideinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDetailsSideinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
