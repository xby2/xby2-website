import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MindShareDetailComponent } from './mind-share-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindShare } from '../shared/model/mind-share';

describe('MindShareDetailComponent', () => {
  let component: MindShareDetailComponent;
  let fixture: ComponentFixture<MindShareDetailComponent>;

  beforeEach(async(() => {
    const mockActivatedRoute = {
      data: {
        subscribe() {}
      }
    };

    TestBed.configureTestingModule({
      declarations: [MindShareDetailComponent],
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
    fixture = TestBed.createComponent(MindShareDetailComponent);
    component = fixture.componentInstance;

    component.mindShare = new MindShare();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
