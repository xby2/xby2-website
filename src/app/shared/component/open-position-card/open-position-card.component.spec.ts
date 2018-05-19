import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenPositionCardComponent } from './open-position-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CollectedOpenPosition } from '../../model/collected-open-position';

describe('OpenPositionCardComponent', () => {
  let component: OpenPositionCardComponent;
  let fixture: ComponentFixture<OpenPositionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenPositionCardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPositionCardComponent);
    component = fixture.componentInstance;

    component.collectedOpenPosition = new CollectedOpenPosition();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
