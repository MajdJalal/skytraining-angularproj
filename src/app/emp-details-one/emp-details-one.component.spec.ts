import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsOneComponent } from './emp-details-one.component';

describe('EmpDetailsOneComponent', () => {
  let component: EmpDetailsOneComponent;
  let fixture: ComponentFixture<EmpDetailsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDetailsOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpDetailsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
