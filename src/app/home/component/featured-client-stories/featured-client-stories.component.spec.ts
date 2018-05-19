import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedClientStoriesComponent } from './featured-client-stories.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeaturedClientStoriesComponent', () => {
  let component: FeaturedClientStoriesComponent;
  let fixture: ComponentFixture<FeaturedClientStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedClientStoriesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedClientStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
