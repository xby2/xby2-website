import { Component, OnInit, Input } from '@angular/core';
import { ClientStory } from '../../model/client-story';
import { Preconditions } from '../../model/preconditions';

@Component({
  selector: 'app-client-story-listing',
  templateUrl: './client-story-listing.component.html',
  styleUrls: ['./client-story-listing.component.css']
})
export class ClientStoryListingComponent implements OnInit {
  @Input() clientStory: ClientStory;

  constructor() {}

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull('clientStory', this.clientStory);
  }
}
