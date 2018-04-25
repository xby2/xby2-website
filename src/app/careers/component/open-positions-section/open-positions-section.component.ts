import { Component, OnInit, Input } from '@angular/core';
import { CollectedOpenPosition } from '../../../shared/model/collected-open-position';

@Component({
  selector: 'app-open-positions-section',
  templateUrl: './open-positions-section.component.html',
  styleUrls: ['./open-positions-section.component.css']
})
export class OpenPositionsSectionComponent implements OnInit {
  @Input() collectedOpenPositions: CollectedOpenPosition[];

  constructor() {}

  ngOnInit() {}
}
