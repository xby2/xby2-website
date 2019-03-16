import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loma2019MeetOurTeamComponent } from './loma2019-meet-our-team.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MediaMeetOurTeamComponent', () => {
  let component: Loma2019MeetOurTeamComponent;
  let fixture: ComponentFixture<Loma2019MeetOurTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Loma2019MeetOurTeamComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loma2019MeetOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
