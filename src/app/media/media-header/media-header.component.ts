import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xby2-media-header',
  templateUrl: './media-header.component.html',
  styleUrls: ['./media-header.component.css']
})
export class MediaHeaderComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() header1: string;
  @Input() header2: string;
  @Input() dateLocation: string;

  constructor() { }

  ngOnInit() {
    if (this.imageUrl == null) {
      throw new Error('\'imageUrl\' attribute required.');
    }
  }

}
