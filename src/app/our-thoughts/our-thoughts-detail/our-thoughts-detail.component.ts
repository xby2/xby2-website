import { Component, OnInit } from '@angular/core';
import { MindShare } from '../service/mind-share';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-thoughts-detail',
  templateUrl: './our-thoughts-detail.component.html',
  styleUrls: ['./our-thoughts-detail.component.css']
})
export class OurThoughtsDetailComponent implements OnInit {
  mindShare: MindShare;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => this.mindShare = data['mindShare']
    );
  }
}
