import { TestBed, inject } from '@angular/core/testing';

import { ClientStoryService } from './client-story.service';
import { HttpClient } from '@angular/common/http';

describe('ClientStoryService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        ClientStoryService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([ClientStoryService], (service: ClientStoryService) => {
      expect(service).toBeTruthy();
    })
  );
});
