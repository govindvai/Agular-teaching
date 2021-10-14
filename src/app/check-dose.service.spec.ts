import { TestBed } from '@angular/core/testing';

import { CheckDoseService } from './check-dose.service';

describe('CheckDoseService', () => {
  let service: CheckDoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckDoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
