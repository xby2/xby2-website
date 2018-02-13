import { TestBed, inject } from '@angular/core/testing';
import { FeaturedClientStoriesResolver } from './featured-client-stories.resolver';

describe('FeaturedClientStoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturedClientStoriesResolver]
    });
  });

  it('should be created', inject([FeaturedClientStoriesResolver], (service: FeaturedClientStoriesResolver) => {
    expect(service).toBeTruthy();
  }));
});
