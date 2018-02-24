import { TestBed, inject } from '@angular/core/testing';

import { ExpertiseService } from './expertise.service';

describe('ExpertiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpertiseService]
    });
  });

  it('should be created', inject([ExpertiseService], (service: ExpertiseService) => {
    expect(service).toBeTruthy();
  }));
});
