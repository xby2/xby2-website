import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  headerText = 'Say Hello';
  subheaderText = 'We would love to learn about your project and answer any ' +
  'questions that you may have.';

  constructor() { }

  ngOnInit() {
  }

}
