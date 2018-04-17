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
  headerText = 'Join our Team';
  subheaderText = 'It takes an entire team united behind something big.  ' +
  'Together, we work hard, we laugh a lot, we brainstorm nonstop, and we ' +
  'give the best high-fives in town.';
  buttonText = 'We\'re Hiring';

  companyValues: CompanyValue[];
  ourValuesButtonGroupItems: ButtonGroupItem[] = [
    { id: 'leadership', label: 'Leadership' },
    { id: 'impact', label: 'Impact' },
    { id: 'honesty', label: 'Honesty' }
  ];
  visibleValue: string;
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
    document.querySelector('#' + this.fragment).scrollIntoView();
  }
}
