import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactMessage } from './contact-message';
import { ContactService } from './contact.service';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
  contact: ContactMessage = this.initializeForm();
  submitDisabled = false;

  constructor(private contactService: ContactService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.submitDisabled = true;
    this.contactService.postContactForm(this.contact).subscribe(
      success => this.handleSuccess(),
      err => this.handleFailure()
    );
  }

  private handleSuccess() {
    this.contact = this.initializeForm();
    this.submitDisabled = false;
    this.toastr.success('Message sent!  We will be in touch shortly.');
  }

  private handleFailure() {
    this.submitDisabled = false;
    this.toastr.success(
      'We\'re having an issue, please email us at web@xby2.com.');
  }

  private initializeForm(): ContactMessage {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: ''
    };
  }
}
