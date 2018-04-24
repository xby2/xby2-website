import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareLink } from './model/share-link';
import { OpenPosition } from '../shared/model/open-position';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrls: ['./career-detail.component.css']
})
export class CareerDetailComponent implements OnInit {
  openPosition: OpenPosition;
  applyText = 'Apply to this job';
  shareLinks: ShareLink[];

  constructor(private route: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.openPosition = this.route.snapshot.data.openPosition;
    this.title.setTitle(this.openPosition.title + ' - X by 2');

    if (this.openPosition === null) {
      throw new Error('Open Position required.');
    }

    this.shareLinks = [
      {
        link: this.constructLinkedInLink(),
        icon: 'fab fa-linkedin fa-2x'
      },
      {
        link: this.constructTwitterLink(),
        icon: 'fab fa-twitter-square fa-2x'
      },
      {
        link: this.constructMailLink(),
        icon: 'fas fa-envelope-square fa-2x'
      }
    ];
  }

  private constructLinkedInLink(): string {
    // More information at:
    // https://developer.linkedin.com/docs/share-on-linkedin

    let result = 'https://www.linkedin.com/shareArticle?mini=true&url=';
    result += window.location.href;
    result += '&title=' + this.openPosition.title;
    result += '&summary=' + 'Work at X by 2!';
    result += '&source=' + 'Xby2Website';

    return result;
  }

  private constructTwitterLink(): string {
    // More information at: https://twitter.com/intent/tweet

    let result = 'https://twitter.com/intent/tweet?';

    result += 'via=x_by_2';
    result += '&url=' + window.location.href;
    result += '&text=' + 'Check out this job posting from X by 2!';

    return result;
  }

  private constructMailLink(): string {
    let result = 'mailto:?';

    result += 'subject=Check out this job posting!';
    result += '&body=' + window.location.href;

    return result;
  }
}
