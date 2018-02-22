import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDetailsActionItemsComponent } from './career-details-action-items.component';

describe('CareerDetailsActionItemsComponent', () => {
  let component: CareerDetailsActionItemsComponent;
  let fixture: ComponentFixture<CareerDetailsActionItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerDetailsActionItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDetailsActionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
