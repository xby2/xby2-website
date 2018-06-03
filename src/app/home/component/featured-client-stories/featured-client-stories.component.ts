import { Component, OnInit, Input } from '@angular/core';
import { ClientStory } from '../../../shared/model/client-story';

@Component({
  selector: 'xby2-featured-client-stories',
  templateUrl: './featured-client-stories.component.html',
  styleUrls: ['./featured-client-stories.component.css']
})
export class FeaturedClientStoriesComponent implements OnInit {
  @Input() featuredClientStories: ClientStory;

  constructor() { }

  ngOnInit() {
  }

}
