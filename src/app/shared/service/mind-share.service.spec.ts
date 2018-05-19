import { TestBed, inject } from '@angular/core/testing';

import { MindShareService } from './mind-share.service';
import { HttpClient } from '@angular/common/http';

describe('MindShareService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        MindShareService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([MindShareService], (service: MindShareService) => {
      expect(service).toBeTruthy();
    })
  );
});
