import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPositionDetailComponent } from './open-position-detail.component';

describe('OpenPositionDetailComponent', () => {
  let component: OpenPositionDetailComponent;
  let fixture: ComponentFixture<OpenPositionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenPositionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPositionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
