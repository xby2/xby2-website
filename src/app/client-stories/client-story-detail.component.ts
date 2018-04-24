import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientStory } from '../shared/model/client-story';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-client-story-detail',
  templateUrl: './client-story-detail.component.html',
  styleUrls: ['./client-story-detail.component.css']
})
export class ClientStoryDetailComponent implements OnInit {
  clientStory: ClientStory;

  constructor(private route: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.clientStory = data['clientStory'];
        this.title.setTitle(this.clientStory.title + ' - X by 2');
      }
    );
  }
}
