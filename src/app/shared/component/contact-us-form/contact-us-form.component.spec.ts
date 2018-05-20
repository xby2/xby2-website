import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFormComponent } from './contact-us-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../service/contact.service';
import { TOASTR_TOKEN } from '../../../core/service/toastr.service';

describe('ContactUsFormComponent', () => {
  let component: ContactUsFormComponent;
  let fixture: ComponentFixture<ContactUsFormComponent>;

  beforeEach(async(() => {
    const mockContactService = {};
    const mockToastr = {};

    TestBed.configureTestingModule({
      imports: [FormsModule],
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
