import { Component, OnInit, Input } from '@angular/core';
import { OpenPosition } from '../../../shared/model/open-position';
import { CollectedOpenPosition } from '../../../shared/model/collected-open-position';

@Component({
  selector: 'app-home-careers',
  templateUrl: './home-careers.component.html',
  styleUrls: ['./home-careers.component.css']
})
export class HomeCareersComponent implements OnInit {
  @Input() featuredOpenPositions: CollectedOpenPosition[];

  constructor() {}

  ngOnInit() {}
}
