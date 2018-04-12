import { Component, OnInit, Input } from '@angular/core';
import { MindShare } from '../../shared/model/mind-share';

@Component({
  selector: 'app-mind-share-listing',
  templateUrl: './mind-share-listing.component.html',
  styleUrls: ['./mind-share-listing.component.css']
})
export class MindShareListingComponent implements OnInit {
  @Input() mindShare: MindShare;

  constructor() { }

  ngOnInit() {
    if (this.mindShare == null) {
      throw new Error('\'mindShare\' attribute required.');
    }
  }
}
