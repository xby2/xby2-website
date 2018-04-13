import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../shared/model/service';
import { OpenPosition } from '../shared/model/open-position';
import { ClientStory } from '../shared/model/client-story';
import { MindShare } from '../shared/model/mind-share';
import { CollectedOpenPosition } from '../shared/model/collected-open-position';

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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
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
      this.collectOpenPositions(this.featuredOpenPositions);
  }

  collectOpenPositions(openPositions: OpenPosition[]) {
    const collectedOpenPositions: CollectedOpenPosition[] = [];

    openPositions.forEach(openPosition => {
      const collectedOpenPosition: CollectedOpenPosition =
        collectedOpenPositions.filter(c => c.title === openPosition.title)[0];

      if (collectedOpenPosition) {
        collectedOpenPosition
                  .listings
                  .push({
                    id: openPosition.id,
                    location: this.convertLocationName(openPosition.location)
                  });
        collectedOpenPosition.listings.sort(function(a, b) {
          const x = a.location.toLowerCase();
          const y = b.location.toLowerCase();
          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0;
        });

      } else {
        collectedOpenPositions.push({
          title: openPosition.title,
          listings: [{
            id: openPosition.id,
            location: this.convertLocationName(openPosition.location)
          }]
        });
      }
    });

    return collectedOpenPositions;
  }

  private convertLocationName(locationName: string): string {
    switch (locationName) {
      case 'Metro Detroit':
        return 'Detroit';
      case 'Greater Toronto':
        return 'Toronto';
      default:
        return locationName;
    }
  }
}
