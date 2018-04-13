import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyValue } from './model/company-value';
import { Perk } from './model/perk';
import { FrequentlyAskedQuestion } from './model/frequently-asked-question';
import { OpenPosition } from '../shared/model/open-position';
import { ButtonGroupItem } from '../shared/model/button-group-item';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  headerText = 'Join our Team';
  subheaderText = 'It takes an entire team united behind something big.  ' +
  'Together, we work hard, we laugh a lot, we brainstorm nonstop, and we ' +
  'give the best high-fives in town.';
  buttonText = 'We\'re Hiring';

  companyValues: CompanyValue[];
  ourValuesButtonGroupItems: ButtonGroupItem[] = [
    { id: 'honesty', label: 'Honesty and Integrity' },
    { id: 'impact', label: 'Impact and Results' },
    { id: 'excellence', label: 'Excellence in Architecture' }
  ];
  visibleValue: string;
  perks: Perk[];
  openPositions: OpenPosition[];
  frequentlyAskedQuestions: FrequentlyAskedQuestion[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyValues = this.route.snapshot.data.companyValues;
    this.openPositions = this.route.snapshot.data.openPositions;
  }
}
