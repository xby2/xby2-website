import { Component, OnInit, Input } from '@angular/core';
import { ClientStory } from '../../../our-work/model/client-story';

@Component({
  selector: 'app-featured-client-stories',
  templateUrl: './featured-client-stories.component.html',
  styleUrls: ['./featured-client-stories.component.css']
})
export class FeaturedClientStoriesComponent implements OnInit {
  @Input() featuredClientStories: ClientStory;

  constructor() { }

  ngOnInit() {
  }

}
