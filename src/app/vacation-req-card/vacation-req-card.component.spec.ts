import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationReqCardComponent } from './vacation-req-card.component';

describe('VacationReqCardComponent', () => {
  let component: VacationReqCardComponent;
  let fixture: ComponentFixture<VacationReqCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationReqCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationReqCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
