import { Component, OnInit } from '@angular/core';
import { ClientStory } from '../client-story';
import { MindShare } from '../mind-share';
import { Expertise } from '../our-expertise/expertise';
import { ExpertiseService } from '../our-expertise/expertise.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'We are Architects for the Insurance and Healthcare Industries';
  expertises: Expertise[];
  clientStories: ClientStory[] = [
    {
      imageUrl: './assets/client-story.jpg',
      title: 'Claims Modernization',
      description: 'A Fortune 500 P&C insurer built a national reputation ' +
        'for delivering quality service that placed it consistently among ' +
        'the top-ranked companies in claims handling and customer...',
      id: 'claims-modernization'
    },
    {
      imageUrl: './assets/client-story.jpg',
      title: 'Data and Analytics for Value-Based Care',
      description: 'A Blue Cross Blue Shield affiliate created one of the ' +
      'largest value-partnership programs in the nation.  In a continued ' +
      'effort to maintain their edge and continually...',
      id: 'data-and-analytics-for-value-based-care'
    },
    {
      imageUrl: './assets/client-story.jpg',
      title: 'Life Core System Transformation',
      description: 'A multi-line P&C and Life insurer desired to replace the ' +
      'core systems within their life division in an effort to increase ' +
      'process automation and efficiency, enable faster...',
      id: 'life-core-system-transformation'
    },
  ];
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

  constructor(private _expertiseService: ExpertiseService) { }

  ngOnInit() {
    this._expertiseService.getExpertises().subscribe(
      response => this.expertises = response
    );
  }
}
