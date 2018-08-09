import { TestBed, inject } from '@angular/core/testing';

import { RecruitingValueService } from './recruiting-value.service';
import { HttpClient } from '@angular/common/http';

describe('CompanyValueService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        RecruitingValueService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([RecruitingValueService], (service: RecruitingValueService) => {
      expect(service).toBeTruthy();
    })
  );
});
