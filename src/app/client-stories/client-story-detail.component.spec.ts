import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientStoryDetailComponent } from './client-story-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

describe('ClientStoryDetailComponent', () => {
  let component: ClientStoryDetailComponent;
  let fixture: ComponentFixture<ClientStoryDetailComponent>;

  beforeEach(async(() => {
    const mockActivatedRoute = {
      data: {
        subscribe() {
          return;
        }
      }
    };

    TestBed.configureTestingModule({
      declarations: [ClientStoryDetailComponent],
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
    fixture = TestBed.createComponent(ClientStoryDetailComponent);
    component = fixture.componentInstance;

    component.clientStory = {
      imageUrl: '',
      listingImageUrl: '',
      title: '',
      description: '',
      nextClientStoryDescription: '',
      nextClientStoryId: '',
      id: '',
      isFeatured: false,
      industry: '',
      client: '',
      expertises: [],
      content: ''
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
