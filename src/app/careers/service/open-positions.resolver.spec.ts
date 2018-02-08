import { TestBed, inject } from '@angular/core/testing';

import { OpenPositionsResolverService } from './open-positions-resolver.service';

describe('OpenPositionsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenPositionsResolverService]
    });
  });

  it('should be created', inject([OpenPositionsResolverService], (service: OpenPositionsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
