import { TestBed } from '@angular/core/testing';

import { PatauthserviceService } from './patauthservice.service';

describe('PatauthserviceService', () => {
  let service: PatauthserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatauthserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
