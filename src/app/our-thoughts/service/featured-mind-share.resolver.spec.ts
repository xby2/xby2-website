import { TestBed, inject } from '@angular/core/testing';

import { FeaturedMindShareService } from './featured-mind-share.service';

describe('FeaturedMindShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturedMindShareService]
    });
  });

  it('should be created', inject([FeaturedMindShareService], (service: FeaturedMindShareService) => {
    expect(service).toBeTruthy();
  }));
});
