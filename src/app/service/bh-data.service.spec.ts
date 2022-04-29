import { TestBed } from '@angular/core/testing';

import { BHDataService } from './bh-data.service';

describe('BHDataService', () => {
  let service: BHDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BHDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
