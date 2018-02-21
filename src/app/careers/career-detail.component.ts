import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenPosition } from './model/open-position';

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrls: ['./career-detail.component.css']
})
export class CareerDetailComponent implements OnInit {
  openPosition: OpenPosition;
  applyText = 'Apply to this job';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.openPosition = this.route.snapshot.data.openPosition;
  }
}
