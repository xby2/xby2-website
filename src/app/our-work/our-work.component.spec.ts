import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkComponent } from './our-work.component';

describe('OurWorkComponent', () => {
  let component: OurWorkComponent;
  let fixture: ComponentFixture<OurWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loadMoreClientStories() should increment clientStoryDisplayCount', () => {
    component.loadMoreClientStories();

    expect(component.clientStoryDisplayCount === 9);
  });
});
