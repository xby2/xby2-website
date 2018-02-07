import { TestBed, inject } from '@angular/core/testing';

import { MindShareResolverService } from './mind-share-resolver.service';

describe('MindShareResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MindShareResolverService]
    });
  });

  it('should be created', inject([MindShareResolverService], (service: MindShareResolverService) => {
    expect(service).toBeTruthy();
  }));
});
