import { Component, OnInit } from '@angular/core';
import { Expertise } from '../our-expertise/expertise';
import { ExpertiseService } from '../our-expertise/expertise.service';
import { ActivatedRoute } from '@angular/router';
import { MindShare } from '../our-thoughts/service/mind-share';
import { ClientStory } from '../our-work/model/client-story';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  expertises: Expertise[];
  featuredClientStories: ClientStory[];
  featuredMindShare: MindShare;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.expertises = this.route.snapshot.data.expertises;
    this.featuredClientStories = this.route.snapshot.data.featuredClientStories;
    this.featuredMindShare = this.route.snapshot.data.featuredMindShare;
  }
}
