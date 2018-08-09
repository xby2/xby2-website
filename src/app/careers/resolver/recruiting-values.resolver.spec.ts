import { TestBed, inject } from '@angular/core/testing';
import { RecruitingValuesResolver } from './recruiting-values.resolver';
import { RecruitingValueService } from '../service/recruiting-value.service';

describe('CompanyValueResolver', () => {
  beforeEach(() => {
    const mockRecruitingValueService = {};

    TestBed.configureTestingModule({
      providers: [
        RecruitingValuesResolver,
        {
          provide: RecruitingValueService,
          useValue: mockRecruitingValueService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([RecruitingValuesResolver], (service: RecruitingValuesResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
