import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCareersComponent } from './home-careers.component';

describe('HomeCareersComponent', () => {
  let component: HomeCareersComponent;
  let fixture: ComponentFixture<HomeCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
