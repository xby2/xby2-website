import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMeetOurTeamComponent } from './media-meet-our-team.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('MediaMeetOurTeamComponent', () => {
  let component: MediaMeetOurTeamComponent;
  let fixture: ComponentFixture<MediaMeetOurTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MediaMeetOurTeamComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaMeetOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
