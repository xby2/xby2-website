import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurThoughtsComponent } from './our-thoughts.component';

describe('OurThoughtsComponent', () => {
  let component: OurThoughtsComponent;
  let fixture: ComponentFixture<OurThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
