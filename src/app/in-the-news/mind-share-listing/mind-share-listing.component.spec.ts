import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindShareListingComponent } from './mind-share-listing.component';

describe('MindShareListingComponent', () => {
  let component: MindShareListingComponent;
  let fixture: ComponentFixture<MindShareListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindShareListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindShareListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
