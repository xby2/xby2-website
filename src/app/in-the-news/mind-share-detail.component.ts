import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindShare } from '../shared/model/mind-share';
import { Title } from '@angular/platform-browser';
import { Preconditions } from '../shared/model/preconditions';

@Component({
  selector: 'xby2-mind-share-detail',
  templateUrl: './mind-share-detail.component.html',
  styleUrls: ['./mind-share-detail.component.css']
})
export class MindShareDetailComponent implements OnInit {
  mindShare: MindShare;

  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.mindShare = data['mindShare'];
      this.title.setTitle(this.mindShare.title + ' - X by 2');
    });
  }
}
