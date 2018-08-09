import { Component, OnInit, Input } from '@angular/core';
import { ClientStory } from '../../model/client-story';
import { Preconditions } from '../../model/preconditions';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'xby2-client-story-listing',
  templateUrl: './client-story-listing.component.html',
  styleUrls: ['./client-story-listing.component.css']
})
export class ClientStoryListingComponent implements OnInit {
  @Input() clientStory: ClientStory;
  assetPrefix = environment.assetPrefixes.clientStories;

  constructor() {}

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull('clientStory', this.clientStory);
  }
}
