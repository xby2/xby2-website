import { TestBed, inject } from '@angular/core/testing';

import { SocialMediaLinkService } from './social-media-link.service';

describe('SocialMediaLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialMediaLinkService]
    });
  });

  it('should be created', inject([SocialMediaLinkService], (service: SocialMediaLinkService) => {
    expect(service).toBeTruthy();
  }));
});
