import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDetailComponent } from './career-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { OpenPosition } from '../shared/model/open-position';
import { Title } from '@angular/platform-browser';

describe('CareerDetailComponent', () => {
  let component: CareerDetailComponent;
  let fixture: ComponentFixture<CareerDetailComponent>;

  beforeEach(async(() => {
    const mockTitle = {
      setTitle(value) {
        return;
      }
    };
    const mockActivatedRoute = {
      snapshot: {
        data: {
          openPosition: {}
        }
      }
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CareerDetailComponent],
      providers: [
        {
          provide: Title,
          useValue: mockTitle
        },
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
