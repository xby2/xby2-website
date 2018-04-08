import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindShare } from '../our-thoughts/service/mind-share';
import { ClientStory } from '../our-work/model/client-story';
import { Service } from '../shared/model/service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: Service[];
  featuredClientStories: ClientStory[];
  featuredMindShare: MindShare;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.services = this.route.snapshot.data.services;
    this.featuredClientStories = this.route.snapshot.data.featuredClientStories;
    this.featuredMindShare = this.route.snapshot.data.featuredMindShare;
  }
}
