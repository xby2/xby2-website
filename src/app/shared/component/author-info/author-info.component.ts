import { Component, OnInit, Input } from '@angular/core';
import { Preconditions } from '../../model/preconditions';

@Component({
  selector: 'xby2-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {
  @Input() authorName: string;
  @Input() authorTitle: string;

  constructor() {}

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull('authorName', this.authorName);
    Preconditions.IsNotUndefinedOrNull('authorTitle', this.authorTitle);
  }
}
