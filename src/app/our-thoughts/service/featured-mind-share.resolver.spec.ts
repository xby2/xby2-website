import { TestBed, inject } from '@angular/core/testing';
import { FeaturedMindShareResolver } from './featured-mind-share.resolver';

describe('FeaturedMindShareResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturedMindShareResolver]
    });
  });

  it('should be created', inject([FeaturedMindShareResolver],
      (service: FeaturedMindShareResolver) => {
    expect(service).toBeTruthy();
  }));
});
