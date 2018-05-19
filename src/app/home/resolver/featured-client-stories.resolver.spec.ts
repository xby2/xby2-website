import { TestBed, inject } from '@angular/core/testing';
import { FeaturedClientStoriesResolver } from './featured-client-stories.resolver';
import { ClientStoryService } from '../../shared/service/client-story.service';

describe('FeaturedClientStoriesResolver', () => {
  beforeEach(() => {
    const mockClientStoryService = {};

    TestBed.configureTestingModule({
      providers: [
        FeaturedClientStoriesResolver,
        {
          provide: ClientStoryService,
          useValue: mockClientStoryService
        }
      ]
    });
  });

  it(
    'should be created',
    inject(
      [FeaturedClientStoriesResolver],
      (service: FeaturedClientStoriesResolver) => {
        expect(service).toBeTruthy();
      }
    )
  );
});
