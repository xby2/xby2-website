import { TestBed, inject } from '@angular/core/testing';

import { OpenPositionService } from './open-position.service';
import { HttpClient } from '@angular/common/http';

describe('OpenPositionService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        OpenPositionService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([OpenPositionService], (service: OpenPositionService) => {
      expect(service).toBeTruthy();
    })
  );
});
