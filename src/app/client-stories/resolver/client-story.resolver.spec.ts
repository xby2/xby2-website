import { TestBed, inject } from '@angular/core/testing';
import { ClientStoryResolver } from './client-story.resolver';

describe('ClientStoryResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientStoryResolver]
    });
  });

  it('should be created', inject([ClientStoryResolver], (service: ClientStoryResolver) => {
    expect(service).toBeTruthy();
  }));
});
