import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindShare } from './service/mind-share';

@Component({
  selector: 'app-our-thoughts-detail',
  templateUrl: './our-thoughts-detail.component.html',
  styleUrls: ['./our-thoughts-detail.component.css']
})
export class OurThoughtsDetailComponent implements OnInit {
  mindShare: MindShare;
  nextMindShareDescription = 'A new and modern claims system for X company ' +
  'veniam, quiz nostrud exercitation';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => this.mindShare = data['mindShare']
    );
  }
}
