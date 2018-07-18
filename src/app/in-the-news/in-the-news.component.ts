import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindShare } from '../shared/model/mind-share';
import { Industry } from '../shared/model/industry';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'xby2-in-the-news',
  templateUrl: './in-the-news.component.html',
  styleUrls: ['./in-the-news.component.css']
})
export class InTheNewsComponent implements OnInit {
  headerText = 'Insights';
  subheaderText = 'Industry insights, technology perspectives and media coverage.';
  mindShares: MindShare[];
  filteredMindShares: MindShare[];
  mindShareDisplayCount = 3;
  initialWidth: number;
  tabletWidth = 768;
  tabletInitialClientStoryCount = 6;
  mobileInitialClientStoryCount = 3;
  buttonGroupItems: Industry[];

  constructor(private route: ActivatedRoute, private title: Title) {
    this.title.setTitle('Insights - X by 2');
    this.determineInitialMindShareCount();
  }

  ngOnInit() {
    this.mindShares = this.route.snapshot.data.mindShares;
    this.filteredMindShares = this.mindShares;
    this.buttonGroupItems = this.route.snapshot.data.industries;
  }

  loadMoreMindShares() {
    this.mindShareDisplayCount += 3;
  }

  performFilter(filterCriteria: string) {
    if (filterCriteria === 'all') {
      this.filteredMindShares = this.mindShares;
    } else {
      this.filteredMindShares = this.mindShares.filter(
        (mindShare: MindShare) => mindShare.industry === filterCriteria
      );
    }

    this.determineInitialMindShareCount();
  }

  private determineInitialMindShareCount() {
    this.initialWidth = window.screen.width;
    this.mindShareDisplayCount =
      this.initialWidth < this.tabletWidth
        ? this.mobileInitialClientStoryCount
        : this.tabletInitialClientStoryCount;
  }
}
