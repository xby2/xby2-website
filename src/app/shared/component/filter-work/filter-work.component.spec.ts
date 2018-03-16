import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWorkComponent } from './filter-work.component';

describe('FilterWorkComponent', () => {
  let component: FilterWorkComponent;
  let fixture: ComponentFixture<FilterWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
