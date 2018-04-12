import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
    if (this.imageUrl == null) {
      throw new Error('\'imageUrl\' attribute required.');
    }
  }

}
