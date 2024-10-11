import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationReqsCollectionComponent } from './vacation-reqs-collection.component';

describe('VacationReqsCollectionComponent', () => {
  let component: VacationReqsCollectionComponent;
  let fixture: ComponentFixture<VacationReqsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationReqsCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationReqsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
