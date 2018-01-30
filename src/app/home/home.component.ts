import { Component, OnInit } from '@angular/core';
import { Expertise } from '../expertise';
import { ClientStory } from '../client-story';
import { MindShare } from '../mind-share';
import { ContactMessage } from '../contact-message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'We are Architects for the Insurance and Healthcare Industries';
  expertises: Expertise[] = [
    {
      imageUrl: './assets/enterprise-architecture.png',
      title: 'Enterprise Architecture',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ' +
            'commodo dictum neque, lobortis lobortis arcu blandit ut. Ut ' +
            'dignissim nunc.',
      routerLink: '/our-expertise',
      class: 'col-xs-6 col-md-4'
    },
    {
      imageUrl: './assets/app-solution-architecture.png',
      title: 'App/Solution Architecture',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ' +
            'commodo dictum neque, lobortis lobortis arcu blandit ut. Ut ' +
            'dignissim nunc.',
      routerLink: '/our-expertise',
      class: 'col-xs-6 col-md-4'
    },
    {
      imageUrl: './assets/data-integration-architecture.png',
      title: 'Data/Integration Architecture',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ' +
            'commodo dictum neque, lobortis lobortis arcu blandit ut. Ut ' +
            'dignissim nunc.',
      routerLink: '/our-expertise',
      class: 'col-xs-6 col-md-4'
    },
    {
      imageUrl: './assets/agile-implementation.png',
      title: 'Agile Implementation',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ' +
            'commodo dictum neque, lobortis lobortis arcu blandit ut. Ut ' +
            'dignissim nunc.',
      routerLink: '/our-expertise',
      class: 'col-xs-6 col-md-4 col-md-offset-2'
    },
    {
      imageUrl: './assets/project-audit-review.png',
      title: 'Project Audit & Review',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ' +
            'commodo dictum neque, lobortis lobortis arcu blandit ut. Ut ' +
            'dignissim nunc.',
      routerLink: '/our-expertise',
      class: 'col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-0'
    }
  ];
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

  constructor() { }

  ngOnInit() {
  }
}
