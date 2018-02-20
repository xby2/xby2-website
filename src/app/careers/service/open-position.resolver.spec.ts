import { TestBed, inject } from '@angular/core/testing';

import { OpenPositionResolver } from './open-position.resolver';

describe('OpenPositionResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenPositionResolver]
    });
  });

  it('should be created', inject([OpenPositionResolver], (service: OpenPositionResolver) => {
    expect(service).toBeTruthy();
  }));
});
