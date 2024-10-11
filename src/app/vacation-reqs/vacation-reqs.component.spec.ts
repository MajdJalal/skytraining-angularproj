import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationReqsComponent } from './vacation-reqs.component';

describe('VacationReqsComponent', () => {
  let component: VacationReqsComponent;
  let fixture: ComponentFixture<VacationReqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationReqsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
