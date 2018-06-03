import { Component, OnInit, Input } from '@angular/core';
import { MindShare } from '../../shared/model/mind-share';
import { Preconditions } from '../../shared/model/preconditions';

@Component({
  selector: 'xby2-mind-share-listing',
  templateUrl: './mind-share-listing.component.html',
  styleUrls: ['./mind-share-listing.component.css']
})
export class MindShareListingComponent implements OnInit {
  @Input() mindShare: MindShare;

  constructor() {}

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull('mindShare', this.mindShare);
  }
}
