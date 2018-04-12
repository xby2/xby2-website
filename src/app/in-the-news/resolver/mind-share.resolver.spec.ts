import { TestBed, inject } from '@angular/core/testing';
import { MindShareResolver } from './mind-share.resolver';

describe('MindShareResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MindShareResolver]
    });
  });

  it('should be created', inject([MindShareResolver], (service: MindShareResolver) => {
    expect(service).toBeTruthy();
  }));
});
