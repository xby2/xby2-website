import { TestBed, inject } from '@angular/core/testing';
import { MindShareResolver } from './mind-share.resolver';
import { MindShareService } from '../../shared/service/mind-share.service';

describe('MindShareResolver', () => {
  beforeEach(() => {
    const mockMindShareService = {};

    TestBed.configureTestingModule({
      providers: [
        MindShareResolver,
        {
          provide: MindShareService,
          useValue: mockMindShareService
        }
      ]
    });
  });

  it(
    'should be created',
    inject([MindShareResolver], (service: MindShareResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
