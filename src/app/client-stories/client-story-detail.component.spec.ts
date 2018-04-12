import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientStoryDetailComponent } from './client-story-detail.component';


describe('ClientStoryDetailComponent', () => {
  let component: ClientStoryDetailComponent;
  let fixture: ComponentFixture<ClientStoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientStoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
