import { TestBed, inject } from '@angular/core/testing';

import { ValueService } from './value.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([ValueService], (service: ValueService) => {
    expect(service).toBeTruthy();
  }));
});
