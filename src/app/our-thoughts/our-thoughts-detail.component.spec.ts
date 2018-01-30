import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurThoughtsDetailComponent } from './our-thoughts-detail.component';

describe('OurThoughtsDetailComponent', () => {
  let component: OurThoughtsDetailComponent;
  let fixture: ComponentFixture<OurThoughtsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurThoughtsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurThoughtsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
