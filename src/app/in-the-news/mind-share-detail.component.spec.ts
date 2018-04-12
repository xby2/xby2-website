import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MindShareDetailComponent } from './mind-share-detail.component';

describe('MindShareDetailComponent', () => {
  let component: MindShareDetailComponent;
  let fixture: ComponentFixture<MindShareDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindShareDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindShareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
