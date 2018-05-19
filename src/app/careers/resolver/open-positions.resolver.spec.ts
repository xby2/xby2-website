import { TestBed, inject } from '@angular/core/testing';
import { OpenPositionsResolver } from './open-positions.resolver';
import { OpenPositionService } from '../../shared/service/open-position.service';

describe('OpenPositionsResolver', () => {
  beforeEach(() => {
    const mockOpenPositionService = {};

    TestBed.configureTestingModule({
      providers: [
        OpenPositionsResolver,
        {
          provide: OpenPositionService,
          useValue: mockOpenPositionService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([OpenPositionsResolver], (service: OpenPositionsResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
