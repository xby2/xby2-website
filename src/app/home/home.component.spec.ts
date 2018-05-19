import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenPositionService } from '../shared/service/open-position.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const mockActivatedRoute = {
      snapshot: {
        data: {
          services: [],
          featuredClientStories: [],
          featuredMindShare: {}
        }
      }
    };
    const mockOpenPositionService = {
      collectOpenPositions() {}
    };

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        },
        {
          provide: OpenPositionService,
          useValue: mockOpenPositionService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
