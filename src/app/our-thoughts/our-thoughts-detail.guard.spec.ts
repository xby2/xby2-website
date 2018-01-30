import { TestBed, async, inject } from '@angular/core/testing';

import { OurThoughtsDetailGuard } from './our-thoughts-detail.guard';

describe('OurThoughtsDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurThoughtsDetailGuard]
    });
  });

  it('should ...', inject([OurThoughtsDetailGuard], (guard: OurThoughtsDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
