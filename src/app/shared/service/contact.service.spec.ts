import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { HttpClient } from '@angular/common/http';

describe('ContactService', () => {
  beforeEach(() => {
    const mockHttpClient = {};

    TestBed.configureTestingModule({
      providers: [
        ContactService,
        {
          provide: HttpClient,
          useValue: mockHttpClient
        }
      ]
    });
  });

  it(
    'should be created',
    inject([ContactService], (service: ContactService) => {
      expect(service).toBeTruthy();
    })
  );
});
