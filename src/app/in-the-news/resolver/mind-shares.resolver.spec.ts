import { TestBed, inject } from '@angular/core/testing';
import { MindSharesResolver } from './mind-shares.resolver';
import { MindShareService } from '../../shared/service/mind-share.service';

describe('MindSharesResolver', () => {
  beforeEach(() => {
    const mockMindShareService = {};

    TestBed.configureTestingModule({
      providers: [
        MindSharesResolver,
        {
          provide: MindShareService,
          useValue: mockMindShareService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([MindSharesResolver], (service: MindSharesResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
