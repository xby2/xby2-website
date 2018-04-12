import { TestBed, inject } from '@angular/core/testing';
import { MindSharesResolver } from './mind-shares.resolver';

describe('MindSharesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MindSharesResolver]
    });
  });

  it('should be created', inject([MindSharesResolver], (service: MindSharesResolver) => {
    expect(service).toBeTruthy();
  }));
});
