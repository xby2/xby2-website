import { Component, OnInit } from '@angular/core';
import { ClientStory } from './client-story';
import { ActivatedRoute } from '@angular/router';
import { ClientStoryService } from './client-story.service';

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
