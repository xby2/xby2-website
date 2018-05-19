import { TestBed, inject } from '@angular/core/testing';
import { FeaturedMindShareResolver } from './featured-mind-share.resolver';
import { MindShareService } from '../../shared/service/mind-share.service';

describe('FeaturedMindShareResolver', () => {
  beforeEach(() => {
    const mockMindShareService = {};

    TestBed.configureTestingModule({
      providers: [
        FeaturedMindShareResolver,
        {
          provide: MindShareService,
          useValue: mockMindShareService
        }
      ]
    });
  });

  it(
    'should be created',
    inject(
      [FeaturedMindShareResolver],
      (service: FeaturedMindShareResolver) => {
        expect(service).toBeTruthy();
      }
    )
  );
});
