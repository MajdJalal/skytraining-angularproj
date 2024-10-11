import { TestBed } from '@angular/core/testing';

import { EmployeeDetailsOneService } from './employee-details-one.service';

describe('EmployeeDetailsOneService', () => {
  let service: EmployeeDetailsOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDetailsOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
