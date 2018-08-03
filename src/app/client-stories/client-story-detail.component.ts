import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientStory } from '../shared/model/client-story';
import { Title } from '@angular/platform-browser';
import {environment} from '../../environments/environment';

@Component({
  selector: 'xby2-client-story-detail',
  templateUrl: './client-story-detail.component.html',
  styleUrls: ['./client-story-detail.component.css']
})
export class ClientStoryDetailComponent implements OnInit {
  clientStory: ClientStory;
  assetPrefix = environment.assetPrefixes.clientStories;

  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.clientStory = data['clientStory'];

      if (this.clientStory === null) {
        throw new Error(`'clientStory' attribute required.`);
      }

      this.title.setTitle(this.clientStory.title + ' - X by 2');
    });
  }
}
