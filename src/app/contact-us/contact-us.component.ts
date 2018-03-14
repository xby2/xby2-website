import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  headerText = 'Say Hello';
  subheaderText = 'Whether you have a question or just want to say hi, give us a shout.';

  constructor() { }

  ngOnInit() {
  }

}
