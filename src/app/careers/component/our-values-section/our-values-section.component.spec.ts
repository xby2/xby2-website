import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurValuesSectionComponent } from './our-values-section.component';

describe('OurValuesSectionComponent', () => {
  let component: OurValuesSectionComponent;
  let fixture: ComponentFixture<OurValuesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OurValuesSectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurValuesSectionComponent);
    component = fixture.componentInstance;

    component.companyValues = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
