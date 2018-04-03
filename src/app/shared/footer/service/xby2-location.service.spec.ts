import { TestBed, inject } from '@angular/core/testing';

import { Xby2LocationService } from './xby2-location.service';

describe('Xby2LocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Xby2LocationService]
    });
  });

  it('should be created', inject([Xby2LocationService], (service: Xby2LocationService) => {
    expect(service).toBeTruthy();
  }));
});
