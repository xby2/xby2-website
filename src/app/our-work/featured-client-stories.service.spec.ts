import { TestBed, inject } from '@angular/core/testing';

import { FeaturedClientStoriesService } from './featured-client-stories.service';

describe('FeaturedClientStoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturedClientStoriesService]
    });
  });

  it('should be created', inject([FeaturedClientStoriesService], (service: FeaturedClientStoriesService) => {
    expect(service).toBeTruthy();
  }));
});
