import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expertise } from './model/expertise';

@Component({
  selector: 'app-our-expertise',
  templateUrl: './our-expertise.component.html',
  styleUrls: ['./our-expertise.component.css']
})
export class OurExpertiseComponent implements OnInit {
  expertises: Expertise[];
  headerText = 'What We Do';
  subheaderText = 'We\'re a seasoned team of architects and leaders with a ' +
  'passion for transforming business through large scale enterprise ' +
  'initiatives.';

  constructor(private route: ActivatedRoute) {
    this.expertises = this.route.snapshot.data.expertises;
  }

  ngOnInit() {
  }
}
