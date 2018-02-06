import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindShare } from './service/mind-share';

@Component({
  selector: 'app-our-thoughts',
  templateUrl: './our-thoughts.component.html',
  styleUrls: ['./our-thoughts.component.css']
})
export class OurThoughtsComponent implements OnInit {
  headerText = 'Mind Share';
  subheaderText = 'We like to think we\'ve learned a few things along the ' +
  'way.  Apparently others agree because they publish our thoughts.  Hope it ' +
  'helps.';
  mindShares: MindShare[];
  filteredMindShares: MindShare[];
  mindShareDisplayCount = 3;
  initialWidth: number;
  tabletWidth = 768;
  tabletInitialClientStoryCount = 6;
  mobileInitialClientStoryCount = 3;

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
