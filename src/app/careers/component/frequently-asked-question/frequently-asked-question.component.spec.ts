import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyAskedQuestionComponent } from './frequently-asked-question.component';

describe('FrequentlyAskedQuestionComponent', () => {
  let component: FrequentlyAskedQuestionComponent;
  let fixture: ComponentFixture<FrequentlyAskedQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyAskedQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyAskedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
