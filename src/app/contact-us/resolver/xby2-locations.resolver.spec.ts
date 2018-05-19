import { TestBed, inject } from '@angular/core/testing';
import { Xby2LocationsResolver } from './xby2-locations.resolver';
import { Xby2LocationService } from '../../shared/footer/service/xby2-location.service';

describe('Xby2LocationsResolver', () => {
  beforeEach(() => {
    const mockXby2LocationService = {};

    TestBed.configureTestingModule({
      providers: [
        Xby2LocationsResolver,
        {
          provide: Xby2LocationService,
          useValue: mockXby2LocationService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([Xby2LocationsResolver], (service: Xby2LocationsResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
