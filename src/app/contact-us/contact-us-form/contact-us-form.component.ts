import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { ContactMessage } from '../../shared/model/contact-message';
import { ContactService } from '../../shared/service/contact.service';
import { Toastr, TOASTR_TOKEN } from '../../core/service/toastr.service';

@Component({
  selector: 'xby2-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
  submitDisabled = false;
  contactForm: FormGroup;
  contactMessage: ContactMessage = new ContactMessage();

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  }

  submitForm() {
    this.contactMessage = this.prepareContactMessage();
    this.submitDisabled = true;
    this.contactService
      .postContactForm(this.contactMessage)
      .subscribe(success => this.handleSuccess(), err => this.handleFailure());
  }

  private prepareContactMessage(): ContactMessage {
    const formModel = this.contactForm.value;

    const contactMessage: ContactMessage = {
      firstName: formModel.firstName as string,
      lastName: formModel.lastName as string,
      email: formModel.email as string,
      phoneNumber: formModel.phoneNumber as string,
      message: formModel.message as string
    };

    return contactMessage;
  }

  private handleSuccess() {
    this.contactForm.reset();
    this.submitDisabled = false;
    this.toastr.success('Message sent!  We will be in touch shortly.');
  }

  private handleFailure() {
    this.submitDisabled = false;
    this.toastr.error(
      'We\'re having an issue, please email us at web@xby2.com.'
    );
  }
}
