import { Component, OnInit, Input } from '@angular/core';
import { MindShare } from '../../../shared/model/mind-share';
import { Preconditions } from '../../../shared/model/preconditions';

@Component({
  selector: 'app-featured-mind-share',
  templateUrl: './featured-mind-share.component.html',
  styleUrls: ['./featured-mind-share.component.css']
})
export class FeaturedMindShareComponent implements OnInit {
  @Input() featuredMindShare: MindShare;

  constructor() {}

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull(
      'featuredMindShare',
      this.featuredMindShare
    );
  }
}
