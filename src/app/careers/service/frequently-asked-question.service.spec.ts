import { TestBed, inject } from '@angular/core/testing';

import { FrequentlyAskedQuestionService } from './frequently-asked-question.service';

describe('FrequentlyAskedQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrequentlyAskedQuestionService]
    });
  });

  it('should be created', inject([FrequentlyAskedQuestionService], (service: FrequentlyAskedQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
