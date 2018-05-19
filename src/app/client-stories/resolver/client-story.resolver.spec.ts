import { TestBed, inject } from '@angular/core/testing';
import { ClientStoryResolver } from './client-story.resolver';
import { ClientStoryService } from '../../shared/service/client-story.service';

describe('ClientStoryResolver', () => {
  beforeEach(() => {
    const mockClientStoryService = {};

    TestBed.configureTestingModule({
      providers: [
        ClientStoryResolver,
        {
          provide: ClientStoryService,
          useValue: mockClientStoryService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([ClientStoryResolver], (service: ClientStoryResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
