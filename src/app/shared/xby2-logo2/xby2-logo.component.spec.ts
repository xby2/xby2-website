import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Xby2LogoComponent } from './xby2-logo.component';

describe('Xby2LogoComponent', () => {
  let component: Xby2LogoComponent;
  let fixture: ComponentFixture<Xby2LogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xby2LogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xby2LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
