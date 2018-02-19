import { TestBed, inject } from '@angular/core/testing';

import { CompanyValueService } from './company-value.service';

describe('CompanyValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyValueService]
    });
  });

  it('should be created', inject([CompanyValueService], (service: CompanyValueService) => {
    expect(service).toBeTruthy();
  }));
});
