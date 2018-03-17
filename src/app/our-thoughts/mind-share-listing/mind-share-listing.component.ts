import { Component, OnInit, Input } from '@angular/core';
import { MindShare } from '../service/mind-share';

@Component({
  selector: 'app-mind-share-listing',
  templateUrl: './mind-share-listing.component.html',
  styleUrls: ['./mind-share-listing.component.css']
})
export class MindShareListingComponent implements OnInit {
  @Input() mindShare: MindShare;
  @Input() isFirst: string;
  @Input() isLast: string;

  constructor() { }

  ngOnInit() {
  }
}
