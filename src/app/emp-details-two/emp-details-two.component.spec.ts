import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsTwoComponent } from './emp-details-two.component';

describe('EmpDetailsTwoComponent', () => {
  let component: EmpDetailsTwoComponent;
  let fixture: ComponentFixture<EmpDetailsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDetailsTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpDetailsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
