import { TestBed } from '@angular/core/testing';

import { CoinmarketcapServiceService } from './coinmarketcap-service.service';

describe('CoinmarketcapServiceService', () => {
  let service: CoinmarketcapServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinmarketcapServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
