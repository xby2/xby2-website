import { TestBed, inject } from '@angular/core/testing';
import { ValuesResolver } from './values.resolver';

describe('ValuesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValuesResolver]
    });
  });

  it('should be created', inject([ValuesResolver], (service: ValuesResolver) => {
    expect(service).toBeTruthy();
  }));
});
