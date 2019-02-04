import { Component, OnInit, Input } from '@angular/core';
import { Preconditions } from '../../model/preconditions';

@Component({
  selector: 'xby2-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull('imageUrl', this.imageUrl);
    Preconditions.IsNotUndefinedOrNull('text', this.imageUrl);
  }
}
