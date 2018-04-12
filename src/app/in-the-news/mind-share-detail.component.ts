import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindShare } from '../shared/model/mind-share';

@Component({
  selector: 'app-mind-share-detail',
  templateUrl: './mind-share-detail.component.html',
  styleUrls: ['./mind-share-detail.component.css']
})
export class MindShareDetailComponent implements OnInit {
  mindShare: MindShare;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => this.mindShare = data['mindShare']
    );
  }
}
