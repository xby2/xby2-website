import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  headerText = 'About Us';
  subheaderText = 'A technology consultancy focused on the practice of ' +
  'application and data architecture in the insurance and healthcare ' +
  'industries.';

  constructor() { }

  ngOnInit() {
  }

}
