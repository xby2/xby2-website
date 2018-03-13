import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurPeopleSectionComponent } from './meet-our-people-section.component';

describe('MeetOurPeopleSectionComponent', () => {
  let component: MeetOurPeopleSectionComponent;
  let fixture: ComponentFixture<MeetOurPeopleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetOurPeopleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetOurPeopleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
