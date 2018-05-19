import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindShareListingComponent } from './mind-share-listing.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MindShare } from '../../shared/model/mind-share';

describe('MindShareListingComponent', () => {
  let component: MindShareListingComponent;
  let fixture: ComponentFixture<MindShareListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MindShareListingComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindShareListingComponent);
    component = fixture.componentInstance;

    component.mindShare = new MindShare();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
