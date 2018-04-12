import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {
  @Input() authorName: string;
  @Input() authorTitle: string;

  constructor() { }

  ngOnInit() {
    if (this.authorName == null) {
      throw new Error('\'authorName\' attribute required');
    }
    if (this.authorTitle == null) {
      throw new Error('\'authorName\' attribute required');
    }
  }

}
