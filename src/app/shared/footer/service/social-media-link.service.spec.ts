import { TestBed, inject } from '@angular/core/testing';

import { SocialMediaLinkService } from './social-media-link.service';
import { HttpClient } from '@angular/common/http';

describe('SocialMediaLinkService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        SocialMediaLinkService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([SocialMediaLinkService], (service: SocialMediaLinkService) => {
      expect(service).toBeTruthy();
    })
  );
});
