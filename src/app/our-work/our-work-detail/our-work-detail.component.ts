import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientStory } from '../model/client-story';

@Component({
  selector: 'app-our-work-detail',
  templateUrl: './our-work-detail.component.html',
  styleUrls: ['./our-work-detail.component.css']
})
export class OurWorkDetailComponent implements OnInit {
  clientStory: ClientStory;
  nextClientStoryDescription = 'A new and modern claims system for X company ' +
  'veniam, quis nostrud exercitation';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => this.clientStory = data['clientStory']
    );
  }
}