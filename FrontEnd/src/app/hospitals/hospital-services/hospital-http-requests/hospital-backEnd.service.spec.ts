import { TestBed } from '@angular/core/testing';

import { HospitalBackEnd } from './hospital-backEnd.service';

describe('BackendService', () => {
  let service: HospitalBackEnd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalBackEnd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
