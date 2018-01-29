import { TestBed, async, inject } from '@angular/core/testing';

import { OurWorkDetailGuard } from './our-work-detail.guard';

describe('OurWorkDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurWorkDetailGuard]
    });
  });

  it('should ...', inject([OurWorkDetailGuard], (guard: OurWorkDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
