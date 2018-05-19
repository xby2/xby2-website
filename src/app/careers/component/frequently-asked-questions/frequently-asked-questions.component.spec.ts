import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FrequentlyAskedQuestionsComponent', () => {
  let component: FrequentlyAskedQuestionsComponent;
  let fixture: ComponentFixture<FrequentlyAskedQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FrequentlyAskedQuestionsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyAskedQuestionsComponent);
    component = fixture.componentInstance;

    component.frequentlyAskedQuestions = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
