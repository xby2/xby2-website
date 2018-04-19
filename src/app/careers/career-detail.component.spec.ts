import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDetailComponent } from './career-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { OpenPosition } from '../shared/model/open-position';

describe('CareerDetailComponent', () => {
  let component: CareerDetailComponent;
  let fixture: ComponentFixture<CareerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CareerDetailComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: of({
                openPosition: {
                  id: '1234',
                  location: 'test location',
                  title: 'Test Title',
                  commitment: 'test commitment',
                  team: 'test team',
                  description: 'test desc',
                  sections: [
                    {
                      text: 'test text',
                      content: 'test content'
                    }
                  ],
                  applyUrl: 'test apply url'
                }
              })
            }
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
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
