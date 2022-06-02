import { TestBed } from '@angular/core/testing';

import { HospitalHttpRequests } from './hospital-http-requests.service';

describe('BackendService', () => {
  let service: HospitalHttpRequests;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalHttpRequests);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
