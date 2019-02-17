import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaContactComponent } from './media-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../shared/service/contact.service';
import { TOASTR_TOKEN } from '../../core/toastr.service';

describe('MediaContactComponent', () => {
  let component: MediaContactComponent;
  let fixture: ComponentFixture<MediaContactComponent>;

  beforeEach(async(() => {
    const mockContactService = {};
    const mockToastr = {};

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [MediaContactComponent],
      providers: [
        {
          provide: ContactService,
          useValue: mockContactService
        },
        {
          provide: TOASTR_TOKEN,
          useValue: mockToastr
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
