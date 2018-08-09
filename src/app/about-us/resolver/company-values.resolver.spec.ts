import { TestBed, inject } from '@angular/core/testing';
import { CompanyValuesResolver } from './company-values.resolver';
import { CompanyValueService } from '../service/company-value.service';

describe('CompanyValueResolver', () => {
  beforeEach(() => {
    const mockCompanyValueService = {};

    TestBed.configureTestingModule({
      providers: [
        CompanyValuesResolver,
        {
          provide: CompanyValueService,
          useValue: mockCompanyValueService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([CompanyValuesResolver], (service: CompanyValuesResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
