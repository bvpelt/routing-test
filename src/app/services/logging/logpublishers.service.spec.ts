import { TestBed } from '@angular/core/testing';

import { LogpublishersService } from './logpublishers.service';

describe('LogpublishersService', () => {
  let service: LogpublishersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogpublishersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
