import { Component, OnInit } from '@angular/core';
import { Expertise } from '../expertise';

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
      class: 'col-xs-6 col-sm-4'
    },
    {
      imageUrl: './assets/app-solution-architecture.png',
      title: 'App/Solution Architecture',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ' +
            'commodo dictum neque, lobortis lobortis arcu blandit ut. Ut ' +
            'dignissim nunc.',
      routerLink: '/our-expertise',
      class: 'col-xs-6 col-sm-4'
    },
    {
      imageUrl: './assets/data-integration-architecture.png',
      title: 'Data/Integration Architecture',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ' +
            'commodo dictum neque, lobortis lobortis arcu blandit ut. Ut ' +
            'dignissim nunc.',
      routerLink: '/our-expertise',
      class: 'col-xs-6 col-sm-4'
    },
    {
      imageUrl: './assets/agile-implementation.png',
      title: 'Agile Implementation',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ' +
            'commodo dictum neque, lobortis lobortis arcu blandit ut. Ut ' +
            'dignissim nunc.',
      routerLink: '/our-expertise',
      class: 'col-xs-6 col-sm-4 col-sm-offset-2'
    },
    {
      imageUrl: './assets/project-audit-review.png',
      title: 'Project Audit & Review',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ' +
            'commodo dictum neque, lobortis lobortis arcu blandit ut. Ut ' +
            'dignissim nunc.',
      routerLink: '/our-expertise',
      class: 'col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-0'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
