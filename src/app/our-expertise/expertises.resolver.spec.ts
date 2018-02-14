import { TestBed, inject } from '@angular/core/testing';
import { ExpertisesResolver } from './expertises.resolver';

describe('ExpertisesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpertisesResolver]
    });
  });

  it('should be created', inject([ExpertisesResolver],
      (service: ExpertisesResolver) => {
    expect(service).toBeTruthy();
  }));
});
