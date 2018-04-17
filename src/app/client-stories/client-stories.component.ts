import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientStory } from '../shared/model/client-story';
import { ButtonGroupItem } from '../shared/model/button-group-item';

@Component({
  selector: 'app-client-stories',
  templateUrl: './client-stories.component.html',
  styleUrls: ['./client-stories.component.css']
})
export class ClientStoriesComponent implements OnInit {
  headerText = 'Client Stories';
  subheaderText = 'Our clients inspire us. Let their stories inspire yours.';
  clientStories: ClientStory[];
  filteredClientStories: ClientStory[];
  clientStoryDisplayCount: number;
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
