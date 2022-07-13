import { TestBed } from '@angular/core/testing';

import { StatuscodesService } from './statuscodes.service';

describe('StatuscodesService', () => {
  let service: StatuscodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatuscodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
