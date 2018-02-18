import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements OnInit {
  headerText = 'About Us';
  subheaderText = 'A technology consultancy focused on the practice of ' +
  'application and data architecture in the insurance and heathcare ' +
  'industries clients.';

  constructor() { }

  ngOnInit() {
  }

}
