import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindShare } from '../shared/model/mind-share';
import { ButtonGroupItem } from '../shared/model/button-group-item';

@Component({
  selector: 'app-in-the-news',
  templateUrl: './in-the-news.component.html',
  styleUrls: ['./in-the-news.component.css']
})
export class InTheNewsComponent implements OnInit {
  headerText = 'In The News';
  subheaderText = 'Industry insights, technology perspectives, and media coverage.';
  mindShares: MindShare[];
  filteredMindShares: MindShare[];
  mindShareDisplayCount = 3;
  initialWidth: number;
  tabletWidth = 768;
  tabletInitialClientStoryCount = 6;
  mobileInitialClientStoryCount = 3;
  buttonGroupItems: ButtonGroupItem[] = [
    { id: 'all', label: 'All' },
    { id: 'insurance', label: 'Insurance' },
    { id: 'healthcare', label: 'Healthcare' },
  ];

  constructor(private route: ActivatedRoute) {
    this.determineInitialMindShareCount();
  }

  ngOnInit() {
    this.mindShares = this.route.snapshot.data.mindShares;
    this.filteredMindShares = this.mindShares;
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
    this.initialWidth = (window.screen.width);
    this.mindShareDisplayCount = this.initialWidth < this.tabletWidth ?
                                    this.mobileInitialClientStoryCount :
                                    this.tabletInitialClientStoryCount ;
  }
}
