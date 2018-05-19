import { TestBed, inject } from '@angular/core/testing';

import { PerkService } from './perk.service';
import { HttpClient } from '@angular/common/http';

describe('PerkService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        PerkService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([PerkService], (service: PerkService) => {
      expect(service).toBeTruthy();
    })
  );
});
