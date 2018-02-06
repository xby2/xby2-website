import { TestBed, inject } from '@angular/core/testing';

import { MindShareService } from './mind-share.service';

describe('MindShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MindShareService]
    });
  });

  it('should be created', inject([MindShareService], (service: MindShareService) => {
    expect(service).toBeTruthy();
  }));
});
