import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecruitingValue } from './model/recruiting-value';
import { Perk } from './model/perk';
import { FrequentlyAskedQuestion } from './model/frequently-asked-question';
import { OpenPosition } from '../shared/model/open-position';
import { ButtonGroupItem } from '../shared/model/button-group-item';
import { OpenPositionService } from '../shared/service/open-position.service';
import { CollectedOpenPosition } from '../shared/model/collected-open-position';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'xby2-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit, AfterViewInit {
  headerText = 'Careers';
  subheaderText = 'Let your skills make a difference in shaping our future.';
  buttonText = 'View Open Positions';

  companyValues: RecruitingValue[];
  perks: Perk[];
  openPositions: OpenPosition[];
  collectedOpenPositions: CollectedOpenPosition[];
  frequentlyAskedQuestions: FrequentlyAskedQuestion[];

  private fragment: string;

  constructor(
    private route: ActivatedRoute,
    private openPositionService: OpenPositionService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Careers - X by 2');
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });

    this.companyValues = this.route.snapshot.data.companyValues;
    this.openPositions = this.route.snapshot.data.openPositions;
    this.perks = this.route.snapshot.data.perks;
    this.frequentlyAskedQuestions = this.route.snapshot.data.frequentlyAskedQuestions;

    if (this.openPositions !== null) {
      this.collectedOpenPositions = this.openPositionService.collectOpenPositions(
        this.openPositions
      );
    }
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
