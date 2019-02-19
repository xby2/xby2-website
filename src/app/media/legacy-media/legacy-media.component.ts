import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Media } from './media';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'xby2-legacy-media',
  templateUrl: './legacy-media.component.html',
  styleUrls: ['./legacy-media.component.css']
})
export class LegacyMediaComponent implements OnInit {
  media: Media;
  headerText = '';
  subheaderText = '';
  safeUrl = null;

  constructor(private route: ActivatedRoute,
    private title: Title,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.media = data['media'];
      if (this.media === null || typeof (this.media) === 'undefined') {
        throw new Error(`'media' attribute required.`);
      } else {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.media.webinar);
      }
    });
  }
}
