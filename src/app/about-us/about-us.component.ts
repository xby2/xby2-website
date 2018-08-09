import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Value } from './model/value';
import { Title } from '@angular/platform-browser';
import {environment} from '../../environments/environment';

@Component({
  selector: 'xby2-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  headerText = 'About Us';
  subheaderText = 'An IT consultancy committed to helping insurance and ' +
  'healthcare organizations transform their business.';
  values: Value[];
  assetPrefix = environment.assetPrefixes.companyValues;

  constructor(private route: ActivatedRoute,
              private title: Title) { }

  ngOnInit() {
    this.values = this.route.snapshot.data.values;
    this.title.setTitle('About Us - X by 2');
  }
}
