import { Component, OnInit } from '@angular/core';
import { ExpertiseService } from './expertise.service';
import { Expertise } from './expertise';

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

  constructor(private expertiseService: ExpertiseService) { }

  ngOnInit() {
    this.expertiseService.getExpertises().subscribe(
      response => this.expertises = response
    );
  }
}
