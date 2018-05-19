import { TestBed, inject } from '@angular/core/testing';

import { FrequentlyAskedQuestionService } from './frequently-asked-question.service';
import { HttpClient } from '@angular/common/http';

describe('FrequentlyAskedQuestionService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        FrequentlyAskedQuestionService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject(
      [FrequentlyAskedQuestionService],
      (service: FrequentlyAskedQuestionService) => {
        expect(service).toBeTruthy();
      }
    )
  );
});
