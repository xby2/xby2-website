import { TestBed, inject } from '@angular/core/testing';

import { ClientStoryService } from './client-story.service';

describe('ClientStoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientStoryService]
    });
  });

  it('should be created', inject([ClientStoryService], (service: ClientStoryService) => {
    expect(service).toBeTruthy();
  }));
});
