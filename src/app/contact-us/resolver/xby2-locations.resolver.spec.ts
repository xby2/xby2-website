import { TestBed, inject } from '@angular/core/testing';
import { Xby2LocationsResolver } from './xby2-locations.resolver';

describe('Xby2LocationsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Xby2LocationsResolver]
    });
  });

  it('should be created', inject([Xby2LocationsResolver], (service: Xby2LocationsResolver) => {
    expect(service).toBeTruthy();
  }));
});
