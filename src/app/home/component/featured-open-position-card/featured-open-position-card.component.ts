import { Component, OnInit, Input } from '@angular/core';
import { CollectedOpenPosition } from '../../../careers/model/collected-open-position';

@Component({
  selector: 'app-featured-open-position-card',
  templateUrl: './featured-open-position-card.component.html',
  styleUrls: ['./featured-open-position-card.component.css']
})
export class FeaturedOpenPositionCardComponent implements OnInit {
  @Input() openPosition: CollectedOpenPosition;

  constructor() { }

  ngOnInit() {
    if (this.openPosition == null) {
      throw new Error ('attribute \'openPosition\' is required.');
    }

    console.log(this.openPosition);
  }
}
