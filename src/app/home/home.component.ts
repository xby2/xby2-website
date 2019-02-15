import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../shared/model/service';
import { OpenPosition } from '../shared/model/open-position';
import { ClientStory } from '../shared/model/client-story';
import { MindShare } from '../shared/model/mind-share';
import { CollectedOpenPosition } from '../shared/model/collected-open-position';
import { OpenPositionService } from '../shared/service/open-position.service';
import { Title } from '@angular/platform-browser';
import { Preconditions } from '../shared/model/preconditions';

@Component({
  selector: 'xby2-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: Service[];
  featuredClientStories: ClientStory[];
  featuredMindShare: MindShare;
  featuredOpenPositions: OpenPosition[];
  collectedOpenPositions: CollectedOpenPosition[];
  heroImageUrl = './assets/home-page.jpg';

  constructor(
    private route: ActivatedRoute,
    private openPositionService: OpenPositionService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('X by 2');
    this.services = this.route.snapshot.data.services;
    this.featuredClientStories = this.route.snapshot.data.featuredClientStories;
    this.featuredMindShare = this.route.snapshot.data.featuredMindShare;
    this.featuredOpenPositions = this.route.snapshot.data.featuredOpenPositions;

    Preconditions.IsNotUndefinedOrNull('services', this.services);
    Preconditions.IsNotUndefinedOrNull(
      'featuredClientStories',
      this.featuredClientStories
    );
    Preconditions.IsNotUndefinedOrNull(
      'featuredMindShare',
      this.featuredMindShare
    );

    if (this.featuredOpenPositions !== null) {
      this.collectedOpenPositions = this.openPositionService.collectOpenPositions(
        this.featuredOpenPositions
      );
    }
  }
}
