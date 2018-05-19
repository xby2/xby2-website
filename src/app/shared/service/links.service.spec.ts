import { TestBed, inject } from '@angular/core/testing';

import { LinksService } from './links.service';
import { HttpClient } from '@angular/common/http';

describe('LinksService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        LinksService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([LinksService], (service: LinksService) => {
      expect(service).toBeTruthy();
    })
  );
});
