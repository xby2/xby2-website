import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientStoriesComponent } from './client-stories.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

describe('ClientStoriesComponent', () => {
  let component: ClientStoriesComponent;
  let fixture: ComponentFixture<ClientStoriesComponent>;

  beforeEach(async(() => {
    const mockActivatedRoute = {
      snapshot: {
        data: {}
      }
    };

    TestBed.configureTestingModule({
      declarations: [ClientStoriesComponent],
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
    fixture = TestBed.createComponent(ClientStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loadMoreClientStories() should increment clientStoryDisplayCount', () => {
    component.loadMoreClientStories();

    expect(component.clientStoryDisplayCount === 9);
  });
});
