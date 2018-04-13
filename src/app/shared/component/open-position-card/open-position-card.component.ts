import { Component, OnInit, Input } from '@angular/core';
import { CollectedOpenPosition } from '../../model/collected-open-position';

@Component({
  selector: 'app-open-position-card',
  templateUrl: './open-position-card.component.html',
  styleUrls: ['./open-position-card.component.css']
})
export class OpenPositionCardComponent implements OnInit {
  @Input() openPosition: CollectedOpenPosition;

  constructor() { }

  ngOnInit() {
    if (this.openPosition == null) {
      throw new Error ('attribute \'openPosition\' is required.');
    }
  }
}
