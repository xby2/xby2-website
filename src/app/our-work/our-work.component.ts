import { Component, OnInit } from '@angular/core';
import { ClientStory } from './client-story';
import { ClientStoryService } from './client-story.service';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {
  headerText = 'Client Stories';
  subheaderText = 'Partnering still matters.  It\'s the secret to our ' +
  'success and that of our clients.  We\'re proud of what we accomplish on ' +
  'their behalf.';
  clientStories: ClientStory[];
  filteredClientStories: ClientStory[];
  clientStoryDisplayCount: number;
  initialWidth: number;
  tabletWidth = 768;
  tabletInitialClientStoryCount = 6;
  mobileInitialClientStoryCount = 3;
  isLoadMoreButtonDisplayed: boolean;

  constructor(private clientStoryService: ClientStoryService) {
    this.determineInitialClientStoryCount();
  }

  ngOnInit() {
    this.clientStoryService.getClientStories().subscribe(
      response => {
        this.clientStories = response,
        this.filteredClientStories = response;
      }
    );
  }

  loadMoreClientStories() {
    this.clientStoryDisplayCount += 3;
  }

  performFilter(filterCriteria: string) {
    if (filterCriteria === 'all') {
      this.filteredClientStories = this.clientStories;
    } else {
      this.filteredClientStories = this.clientStories.filter(
        (clientStory: ClientStory) => clientStory.industry === filterCriteria
      );
    }

    this.determineInitialClientStoryCount();
  }

  private determineInitialClientStoryCount() {
    this.initialWidth = (window.screen.width);
    this.clientStoryDisplayCount = this.initialWidth < this.tabletWidth ?
                                    this.mobileInitialClientStoryCount :
                                    this.tabletInitialClientStoryCount ;
  }
}
