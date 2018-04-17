import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Value } from './model/value';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  headerText = 'About Us';
  subheaderText = 'An IT consultancy committed to helping insurance and ' +
  'healthcare organizations transform their businesss.';
  values: Value[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.values = this.route.snapshot.data.values;
  }
}
