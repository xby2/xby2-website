import { Component, OnInit } from '@angular/core';
import { Xby2Location } from '../shared/model/xby2-location';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'xby2-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  headerText = 'Contact Us';
  subheaderText = 'Have a question? Let\'s start a conversation.';
  locations: Xby2Location;
  centerLatitude = 43.009953;
  centerLongitude = -81.273613;
  zoomLevel = 6;

  constructor(private activatedRoute: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Contact Us - X by 2');
    this.locations = this.activatedRoute.snapshot.data.locations;
  }

}
