import { TestBed, inject } from '@angular/core/testing';
import { ServiceService } from './service.service';
import { HttpClient } from '@angular/common/http';

describe('ServiceService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        ServiceService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([ServiceService], (service: ServiceService) => {
      expect(service).toBeTruthy();
    })
  );
});
