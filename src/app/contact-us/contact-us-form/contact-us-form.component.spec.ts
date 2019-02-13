import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFormComponent } from './contact-us-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../shared/service/contact.service';
import { TOASTR_TOKEN } from '../../core/toastr.service';

describe('ContactUsFormComponent', () => {
  let component: ContactUsFormComponent;
  let fixture: ComponentFixture<ContactUsFormComponent>;

  beforeEach(async(() => {
    const mockContactService = {};
    const mockToastr = {};

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ContactUsFormComponent],
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
