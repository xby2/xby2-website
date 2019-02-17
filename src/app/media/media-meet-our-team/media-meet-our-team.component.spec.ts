import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMeetOurTeamComponent } from './media-meet-our-team.component';

describe('MediaMeetOurTeamComponent', () => {
  let component: MediaMeetOurTeamComponent;
  let fixture: ComponentFixture<MediaMeetOurTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaMeetOurTeamComponent ]
    })
    .compileComponents();
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
