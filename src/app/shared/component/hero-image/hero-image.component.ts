import { Component, OnInit, Input } from '@angular/core';
import { Preconditions } from '../../model/preconditions';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  @Input() imageUrl: string;

  constructor() {}

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull('imageUrl', this.imageUrl);
  }
}
