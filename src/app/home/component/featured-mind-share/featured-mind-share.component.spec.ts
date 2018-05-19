import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMindShareComponent } from './featured-mind-share.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeaturedMindShareComponent', () => {
  let component: FeaturedMindShareComponent;
  let fixture: ComponentFixture<FeaturedMindShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedMindShareComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMindShareComponent);
    component = fixture.componentInstance;

    component.featuredMindShare = {
      authorFullImageUrl: '',
      authorImageUrl: '',
      authorName: '',
      authorTitle: '',
      id: '',
      industry: '',
      title: '',
      shortDescription: '',
      isFeatured: false,
      publishDate: null,
      readTimeInMinutes: 5,
      content: '',
      publishName: '',
      publishUrl: '',
      tags: [],
      nextMindShareId: '',
      nextMindShareTitle: ''
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
