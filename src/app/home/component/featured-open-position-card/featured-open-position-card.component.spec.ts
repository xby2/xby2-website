import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedOpenPositionCardComponent } from './featured-open-position-card.component';

describe('FeaturedOpenPositionCardComponent', () => {
  let component: FeaturedOpenPositionCardComponent;
  let fixture: ComponentFixture<FeaturedOpenPositionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedOpenPositionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedOpenPositionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
