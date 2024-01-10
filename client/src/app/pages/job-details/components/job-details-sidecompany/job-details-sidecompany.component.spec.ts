import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsSidecompanyComponent } from './job-details-sidecompany.component';

describe('JobDetailsSidecompanyComponent', () => {
  let component: JobDetailsSidecompanyComponent;
  let fixture: ComponentFixture<JobDetailsSidecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailsSidecompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDetailsSidecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
