import { TestBed, inject } from '@angular/core/testing';
import { ServicesResolver } from './services.resolver';
import { ServiceService } from '../service/service.service';

describe('ServicesResolver', () => {
  beforeEach(() => {
    const mockServiceService = {};

    TestBed.configureTestingModule({
      providers: [
        ServicesResolver,
        {
          provide: ServiceService,
          useValue: mockServiceService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([ServicesResolver], (service: ServicesResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
