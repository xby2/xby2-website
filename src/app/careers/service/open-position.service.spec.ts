import { TestBed, inject } from '@angular/core/testing';

import { OpenPositionService } from './open-position.service';

describe('OpenPositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenPositionService]
    });
  });

  it('should be created', inject([OpenPositionService], (service: OpenPositionService) => {
    expect(service).toBeTruthy();
  }));
});
