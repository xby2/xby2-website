import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InTheNewsComponent } from './in-the-news.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

describe('InTheNewsComponent', () => {
  let component: InTheNewsComponent;
  let fixture: ComponentFixture<InTheNewsComponent>;

  beforeEach(async(() => {
    const mockActivatedRoute = {
      snapshot: {
        data: {}
      }
    };

    TestBed.configureTestingModule({
      declarations: [InTheNewsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTheNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
