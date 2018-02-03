import { Component, OnInit } from '@angular/core';
import { Expertise } from '../our-expertise/expertise';
import { ExpertiseService } from '../our-expertise/expertise.service';
import { ClientStory } from '../our-work/client-story';
import { MindShare } from '../our-thoughts/mind-share';
import { ClientStoryService } from '../our-work/client-story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'We are Architects for the Insurance and Healthcare Industries';
  expertises: Expertise[];
  featuredClientStories: ClientStory[];
  mindShare: MindShare = {
    id: 'software-development-is-like-toilet-training',
    title: 'Software Development Is Like Toilet Training',
    author: 'David Mitzel',
    authorImageUrl: './assets/david-mitzel.png',
    authorFullImageUrl: './assets/david-mitzel-full.png',
    authorTitle: 'Architect & Senior Developer',
    shortDescription: 'As I\'ve helped my 2-year-old daughter through the ' +
      'first couple stages of toilet training, it occured to me that ' +
      'sometimes software development is a similar process.'
  };

  constructor(private expertiseService: ExpertiseService,
              private clientStoryService: ClientStoryService) { }

  ngOnInit() {
    this.expertiseService.getExpertises().subscribe(
      response => this.expertises = response
    );

    this.clientStoryService.getFeaturedClientStories().subscribe(
      response => this.featuredClientStories = response
    );
  }
}
