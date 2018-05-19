import { TestBed, inject } from '@angular/core/testing';

import { OpenPositionResolver } from './open-position.resolver';
import { OpenPositionService } from '../../shared/service/open-position.service';

describe('OpenPositionResolver', () => {
  beforeEach(() => {
    const mockOpenPositionService = {};

    TestBed.configureTestingModule({
      providers: [
        OpenPositionResolver,
        {
          provide: OpenPositionService,
          useValue: mockOpenPositionService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([OpenPositionResolver], (service: OpenPositionResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
