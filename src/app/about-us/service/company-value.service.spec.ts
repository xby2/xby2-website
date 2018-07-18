import { TestBed, inject } from '@angular/core/testing';

import { CompanyValueService } from './company-value.service';
import { HttpClient } from '@angular/common/http';

describe('CompanyValueService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        CompanyValueService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([CompanyValueService], (service: CompanyValueService) => {
      expect(service).toBeTruthy();
    })
  );
});
