import { TestBed } from '@angular/core/testing';

import { CountriesservicesService } from './countriesservices.service';

describe('CountriesservicesService', () => {
  let service: CountriesservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
