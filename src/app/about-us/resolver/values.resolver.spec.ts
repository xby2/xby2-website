import { TestBed, inject } from '@angular/core/testing';
import { ValuesResolver } from './values.resolver';
import { ValueService } from '../service/value.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ValuesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValuesResolver, ValueService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([ValuesResolver], (service: ValuesResolver) => {
    expect(service).toBeTruthy();
  }));
});
