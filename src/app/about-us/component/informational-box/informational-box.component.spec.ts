import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalBoxComponent } from './informational-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('InformationalBoxComponent', () => {
  let component: InformationalBoxComponent;
  let fixture: ComponentFixture<InformationalBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationalBoxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationalBoxComponent);
    component = fixture.componentInstance;
    component.title = 'Value';
    component.value = 20;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
