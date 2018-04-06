import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalBoxComponent } from './informational-box.component';

describe('InformationalBoxComponent', () => {
  let component: InformationalBoxComponent;
  let fixture: ComponentFixture<InformationalBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationalBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
