import { Component, OnInit, Input } from '@angular/core';
import { ClientStory } from '../../../our-work/model/client-story';

@Component({
  selector: 'app-client-story-listing',
  templateUrl: './client-story-listing.component.html',
  styleUrls: ['./client-story-listing.component.css']
})
export class ClientStoryListingComponent implements OnInit {
  @Input() clientStory: ClientStory;
  @Input() isFirst: string;
  @Input() isLast: string;

  constructor() { }

  ngOnInit() {
  }
}
