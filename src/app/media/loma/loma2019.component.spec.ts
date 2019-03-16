import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loma2019Component } from './loma2019.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

describe('LOMA2019Component', () => {
  let component: Loma2019Component;
  let fixture: ComponentFixture<Loma2019Component>;

  beforeEach(async(() => {
    const mockActivatedRoute = {
      snapshot: {
        data: {}
      }
    };

    TestBed.configureTestingModule({
      declarations: [Loma2019Component],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loma2019Component);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
