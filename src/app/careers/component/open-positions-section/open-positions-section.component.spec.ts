import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPositionsSectionComponent } from './open-positions-section.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OpenPositionsSectionComponent', () => {
  let component: OpenPositionsSectionComponent;
  let fixture: ComponentFixture<OpenPositionsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenPositionsSectionComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPositionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
