import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {environment} from '../../environments/environment';
import { Media } from './model/media';

@Component({
  selector: 'xby2-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  media: Media;
  headerText = '';
  subheaderText = '';

  constructor(private route: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
        this.media = data['media'];
        if (this.media === null || typeof (this.media) === 'undefined') {
            throw new Error(`'media' attribute required.`);
        }
    });
  }
}
