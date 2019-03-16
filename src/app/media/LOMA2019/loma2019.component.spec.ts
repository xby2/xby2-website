import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOMA2019Component } from './loma2019.component';

describe('LOMA2019Component', () => {
  let component: LOMA2019Component;
  let fixture: ComponentFixture<LOMA2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOMA2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOMA2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
