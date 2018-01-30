import { Component, OnInit } from '@angular/core';
import { ContactMessage } from '../../contact-message';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
  contact: ContactMessage = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    comment: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    console.log(this.contact);
  }
}
