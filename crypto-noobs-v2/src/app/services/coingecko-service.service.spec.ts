import { TestBed } from '@angular/core/testing';

import { CoingeckoServiceService } from './coingecko-service.service';

describe('CoingeckoServiceService', () => {
  let service: CoingeckoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoingeckoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
