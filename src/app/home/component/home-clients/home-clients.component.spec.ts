import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClientsComponent } from './home-clients.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeClientsComponent', () => {
  let component: HomeClientsComponent;
  let fixture: ComponentFixture<HomeClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeClientsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
