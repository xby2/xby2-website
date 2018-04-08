import { TestBed, inject } from '@angular/core/testing';
import { ServicesResolver } from './services.resolver';

describe('ServicesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesResolver]
    });
  });

  it('should be created', inject([ServicesResolver],
      (service: ServicesResolver) => {
    expect(service).toBeTruthy();
  }));
});
