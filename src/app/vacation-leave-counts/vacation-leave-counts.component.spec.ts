import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationLeaveCountsComponent } from './vacation-leave-counts.component';

describe('VacationLeaveCountsComponent', () => {
  let component: VacationLeaveCountsComponent;
  let fixture: ComponentFixture<VacationLeaveCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationLeaveCountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationLeaveCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
