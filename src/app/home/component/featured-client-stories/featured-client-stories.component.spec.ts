import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedClientStoriesComponent } from './featured-client-stories.component';

describe('FeaturedClientStoriesComponent', () => {
  let component: FeaturedClientStoriesComponent;
  let fixture: ComponentFixture<FeaturedClientStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedClientStoriesComponent ]
    })
    .compileComponents();
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
