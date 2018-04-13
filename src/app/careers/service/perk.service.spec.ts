import { TestBed, inject } from '@angular/core/testing';

import { PerkService } from './perk.service';

describe('PerkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerkService]
    });
  });

  it('should be created', inject([PerkService], (service: PerkService) => {
    expect(service).toBeTruthy();
  }));
});
