import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersComponent } from './careers.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { OpenPositionService } from '../shared/service/open-position.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

describe('CareersComponent', () => {
  let component: CareersComponent;
  let fixture: ComponentFixture<CareersComponent>;

  beforeEach(async(() => {
    const mockRoute = {
      fragment: {
        subscribe() {
          return;
        }
      },
      snapshot: {
        data: {}
      }
    };
    const mockOpenPositionService = {
      collectOpenPositions(positions) {
        return;
      }
    };
    const mockTitle = {
      setTitle(value) {
        return;
      }
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockRoute
        },
        {
          provide: OpenPositionService,
          useValue: mockOpenPositionService
        },
        {
          provide: Title,
          useValue: mockTitle
        }
      ],
      declarations: [CareersComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
