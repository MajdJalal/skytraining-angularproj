import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReqsComponent } from './pending-reqs.component';

describe('PendingReqsComponent', () => {
  let component: PendingReqsComponent;
  let fixture: ComponentFixture<PendingReqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingReqsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
