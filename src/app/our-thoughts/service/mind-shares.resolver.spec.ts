import { TestBed, inject } from '@angular/core/testing';

import { MindSharesService } from './mind-shares.service';

describe('MindSharesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MindSharesService]
    });
  });

  it('should be created', inject([MindSharesService], (service: MindSharesService) => {
    expect(service).toBeTruthy();
  }));
});
