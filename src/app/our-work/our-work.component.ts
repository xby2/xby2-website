import { Component, OnInit } from '@angular/core';
import { ClientStoryService } from './service/client-story.service';
import { ClientStory } from './model/client-story';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {
  headerText = 'Client Stories';
  subheaderText = 'Requisite skills, instincts, and judgment to guide our clients to where they ' +
  'want to be.';
  clientStories: ClientStory[];
  filteredClientStories: ClientStory[];
  clientStoryDisplayCount: number;
  initialWidth: number;
  tabletWidth = 768;
  tabletInitialClientStoryCount = 6;
  mobileInitialClientStoryCount = 3;

  constructor(private route: ActivatedRoute) {
    this.determineInitialClientStoryCount();
  }

  ngOnInit() {
    this.clientStories = this.route.snapshot.data.clientStories,
    this.filteredClientStories = this.clientStories;
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
