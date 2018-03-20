import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextItemSectionComponent } from './next-item-section.component';

describe('NextItemSectionComponent', () => {
  let component: NextItemSectionComponent;
  let fixture: ComponentFixture<NextItemSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextItemSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
