import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStoryListingComponent } from './client-story-listing.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientStory } from '../../model/client-story';

describe('ClientStoryListingComponent', () => {
  let component: ClientStoryListingComponent;
  let fixture: ComponentFixture<ClientStoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientStoryListingComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStoryListingComponent);
    component = fixture.componentInstance;

    component.clientStory = new ClientStory();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
