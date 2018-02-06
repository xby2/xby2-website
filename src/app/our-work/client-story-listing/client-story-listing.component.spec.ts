import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStoryListingComponent } from './client-story-listing.component';

describe('ClientStoryListingComponent', () => {
  let component: ClientStoryListingComponent;
  let fixture: ComponentFixture<ClientStoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientStoryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
