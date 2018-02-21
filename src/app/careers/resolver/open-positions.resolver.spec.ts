import { TestBed, inject } from '@angular/core/testing';
import { OpenPositionsResolver } from './open-positions.resolver';

describe('OpenPositionsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenPositionsResolver]
    });
  });

  it('should be created', inject([OpenPositionsResolver],
      (service: OpenPositionsResolver) => {
    expect(service).toBeTruthy();
  }));
});
