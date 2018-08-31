import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {environment} from '../../environments/environment';

@Component({
  selector: 'xby2-icef2018',
  templateUrl: './ICEF2018.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  headerText = 'ICEF 2018';
  subheaderText = 'Reflecting on the Journey to Successful Enterprise AI Implementations';

  constructor(private route: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('ICEF 2018');
  }
}
