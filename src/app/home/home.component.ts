import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../shared/model/service';
import { OpenPosition } from '../shared/model/open-position';
import { ClientStory } from '../shared/model/client-story';
import { MindShare } from '../shared/model/mind-share';
import { CollectedOpenPosition } from '../shared/model/collected-open-position';
import { OpenPositionService } from '../shared/service/open-position.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: Service[];
  featuredClientStories: ClientStory[];
  featuredMindShare: MindShare;
  featuredOpenPositions: OpenPosition[];
  collectedOpenPositions: CollectedOpenPosition[];
  heroImageUrl = 'home-page.png';

  constructor(private route: ActivatedRoute,
              private openPositionService: OpenPositionService,
              private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('X by 2');
    this.services = this.route.snapshot.data.services;
    this.featuredClientStories = this.route.snapshot.data.featuredClientStories;
    this.featuredMindShare = this.route.snapshot.data.featuredMindShare;
    this.featuredOpenPositions = this.route.snapshot.data.featuredOpenPositions;

    if (this.services == null) {
      throw new Error('attribute \'services\' required.');
    }
    if (this.featuredClientStories == null) {
      throw new Error('attribute \'featuredClientStories\' required.');
    }
    if (this.featuredMindShare == null) {
      throw new Error('attribute \'featuredMindShare\' required.');
    }
    if (this.featuredOpenPositions == null) {
      throw new Error('attribute \'featuredOpenPositions\' required.');
    }

    this.collectedOpenPositions =
      this.openPositionService.collectOpenPositions(this.featuredOpenPositions);
  }
}
