import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyValue } from './model/company-value';
import { Perk } from './model/perk';
import { FrequentlyAskedQuestion } from './model/frequently-asked-question';
import { OpenPosition } from '../shared/model/open-position';
import { ButtonGroupItem } from '../shared/model/button-group-item';
import { OpenPositionService } from '../shared/service/open-position.service';
import { CollectedOpenPosition } from '../shared/model/collected-open-position';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit, AfterViewInit {
  headerText = 'Careers';
  subheaderText = 'Let your skills make a difference in shaping our future.';
  buttonText = 'View Open Positions';

  companyValues: CompanyValue[];
  perks: Perk[];
  openPositions: OpenPosition[];
  collectedOpenPositions: CollectedOpenPosition[];
  frequentlyAskedQuestions: FrequentlyAskedQuestion[];

  private fragment: string;

  constructor(private route: ActivatedRoute,
              private openPositionService: OpenPositionService) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

    this.companyValues = this.route.snapshot.data.companyValues;
    this.openPositions = this.route.snapshot.data.openPositions;
    this.perks = this.route.snapshot.data.perks;
    this.frequentlyAskedQuestions =
      this.route.snapshot.data.frequentlyAskedQuestions;

    this.collectedOpenPositions =
      this.openPositionService.collectOpenPositions(this.openPositions);
  }

  ngAfterViewInit() {
    if (this.fragment !== null && this.fragment !== undefined) {
      document.querySelector('#' + this.fragment).scrollIntoView();
    }
  }

  scrollToOpenPositions() {
    document.querySelector('#open-positions').scrollIntoView();
  }
}
