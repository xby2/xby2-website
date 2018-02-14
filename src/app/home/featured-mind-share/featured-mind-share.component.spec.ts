import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMindShareComponent } from './featured-mind-share.component';

describe('FeaturedMindShareComponent', () => {
  let component: FeaturedMindShareComponent;
  let fixture: ComponentFixture<FeaturedMindShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedMindShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMindShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
