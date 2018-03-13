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
  subheaderText = 'Transforming business through technology.';

  constructor(private route: ActivatedRoute) {
    this.expertises = this.route.snapshot.data.expertises;
  }

  ngOnInit() {
  }
}
