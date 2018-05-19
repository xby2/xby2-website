import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextItemSectionComponent } from './next-item-section.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NextItemSectionComponent', () => {
  let component: NextItemSectionComponent;
  let fixture: ComponentFixture<NextItemSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextItemSectionComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
