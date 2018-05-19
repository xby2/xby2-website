import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeServiceCardComponent } from './home-service-card.component';

describe('HomeServiceCardComponent', () => {
  let component: HomeServiceCardComponent;
  let fixture: ComponentFixture<HomeServiceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeServiceCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiceCardComponent);
    component = fixture.componentInstance;

    component.service = {
      imageUrl: '',
      title: '',
      text: '',
      fullText: '',
      points: [],
      clientStoryId: ''
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
