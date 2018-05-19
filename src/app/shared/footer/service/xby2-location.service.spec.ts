import { TestBed, inject } from '@angular/core/testing';

import { Xby2LocationService } from './xby2-location.service';
import { HttpClient } from '@angular/common/http';

describe('Xby2LocationService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        Xby2LocationService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([Xby2LocationService], (service: Xby2LocationService) => {
      expect(service).toBeTruthy();
    })
  );
});
