import { Component, OnInit, Input } from '@angular/core';
import { CollectedOpenPosition } from '../../model/collected-open-position';
import { Preconditions } from '../../model/preconditions';

@Component({
  selector: 'app-open-position-card',
  templateUrl: './open-position-card.component.html',
  styleUrls: ['./open-position-card.component.css']
})
export class OpenPositionCardComponent implements OnInit {
  @Input() collectedOpenPosition: CollectedOpenPosition;

  constructor() {}

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull(
      'collectedOpenPosition',
      this.collectedOpenPosition
    );
  }
}
