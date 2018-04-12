import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InTheNewsComponent } from './in-the-news.component';

describe('InTheNewsComponent', () => {
  let component: InTheNewsComponent;
  let fixture: ComponentFixture<InTheNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTheNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTheNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
