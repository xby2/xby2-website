import { TestBed, inject } from '@angular/core/testing';
import { CompanyValuesResolver } from './company-values.resolver';


describe('CompanyValueResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyValuesResolver]
    });
  });

  it('should be created', inject([CompanyValuesResolver], (service: CompanyValuesResolver) => {
    expect(service).toBeTruthy();
  }));
});
