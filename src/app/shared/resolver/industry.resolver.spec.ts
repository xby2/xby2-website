import { TestBed, inject } from '@angular/core/testing';
import { IndustryResolver } from './industry.resolver';
import { IndustryService } from '../service/industry.service';

describe('IndustryResolver', () => {
  beforeEach(() => {
    const mockIndustryService = {};

    TestBed.configureTestingModule({
      providers: [
          IndustryResolver,
        {
          provide: IndustryService,
          useValue: mockIndustryService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([IndustryResolver], (service: IndustryResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
