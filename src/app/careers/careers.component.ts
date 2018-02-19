import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyValue } from './model/company-value';
import { Perk } from './model/perk';
import { OpenPosition } from './model/open-position';
import { CollectedOpenPosition } from './model/collected-open-position';
import { FrequentlyAskedQuestion } from './model/frequently-asked-question';

declare var $: any;

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
  ourValues: CompanyValue[];
  visibleOurValuesDescription: string;
  perks: Perk[] = [
    {
      title: 'Relax, we\'ve got you covered',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex.'
    },
    {
      title: 'Relax, we\'ve got you covered 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 2'
    },
    {
      title: 'Relax, we\'ve got you covered 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 3'
    },
    {
      title: 'Relax, we\'ve got you covered 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 4'
    },
    {
      title: 'Relax, we\'ve got you covered 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 5'
    },
    {
      title: 'Relax, we\'ve got you covered 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 6'
    },
  ];
  openPositions: OpenPosition[];
  collectedOpenPositions: CollectedOpenPosition[];
  collectedOpenPositionsTriples: any[];
  frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
    {
      id: 'workspaces',
      question: 'What kind of workspaces will be available?',
      answer: 'Our workspaces accomodate the needs of our various ' +
      'capabilities and how they operate (for example, dual monitors and ' +
      'standing desks).  Our intention is to have spaces that offer more ' +
      'collaboration and various work styles and business needs.  We\'ll all ' +
      'have access to a variety of options from meeting rooms, lounges, open ' +
      'team tables, quiet zones, and more.'
    },
    {
      id: 'bike',
      question: 'Can I bike to work?',
      answer: 'Our workspaces accomodate the needs of our various ' +
      'capabilities and how they operate (for example, dual monitors and ' +
      'standing desks).  Our intention is to have spaces that offer more ' +
      'collaboration and various work styles and business needs.  We\'ll all ' +
      'have access to a variety of options from meeting rooms, lounges, open ' +
      'team tables, quiet zones, and more.'
    },
    {
      id: 'gym',
      question: 'I enjoy awkwardly running into my co-workers wearing sweaty ' +
      'gym clothes.  Will there be a gym?',
      answer: 'Our workspaces accomodate the needs of our various ' +
      'capabilities and how they operate (for example, dual monitors and ' +
      'standing desks).  Our intention is to have spaces that offer more ' +
      'collaboration and various work styles and business needs.  We\'ll all ' +
      'have access to a variety of options from meeting rooms, lounges, open ' +
      'team tables, quiet zones, and more.'
    },
    {
      id: 'random1',
      question: 'Random question #1',
      answer: 'Our workspaces accomodate the needs of our various ' +
      'capabilities and how they operate (for example, dual monitors and ' +
      'standing desks).  Our intention is to have spaces that offer more ' +
      'collaboration and various work styles and business needs.  We\'ll all ' +
      'have access to a variety of options from meeting rooms, lounges, open ' +
      'team tables, quiet zones, and more.'
    },
    {
      id: 'random2',
      question: 'Random question #2',
      answer: 'Our workspaces accomodate the needs of our various ' +
      'capabilities and how they operate (for example, dual monitors and ' +
      'standing desks).  Our intention is to have spaces that offer more ' +
      'collaboration and various work styles and business needs.  We\'ll all ' +
      'have access to a variety of options from meeting rooms, lounges, open ' +
      'team tables, quiet zones, and more.'
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.ourValues = this.route.snapshot.data.companyValues;
    this.visibleOurValuesDescription = this.ourValues[0].description;
    this.openPositions = this.route.snapshot.data.openPositions;
    this.collectedOpenPositions = this.collectOpenPositions(this.openPositions);
    this.collectedOpenPositionsTriples =
      this.collectOpenPositionTriples(this.collectedOpenPositions);

    $(document).ready(function() {
      $('.open-position').on('click', function() {
        $('.listings').collapse('hide');
        $('.row.positions').removeClass('in');
        $(this).parents('.row').addClass('in');
      });
    });
  }

  changeVisibleOurValuesDescription(title: string) {
    const selectedOurValue = this.ourValues
                      .filter(ourValues => ourValues.title === title)[0];

    if (selectedOurValue) {
      this.visibleOurValuesDescription = selectedOurValue.description;
    }
  }

  private collectOpenPositions(openPositions: OpenPosition[]) {
    const collectedOpenPositions: CollectedOpenPosition[] = [];

    openPositions.forEach(openPosition => {
      const collectedOpenPosition: CollectedOpenPosition =
        collectedOpenPositions.filter(c => c.title === openPosition.title)[0];

      if (collectedOpenPosition) {
        collectedOpenPosition
                        .locations
                        .push(this.convertLocationName(openPosition.location));
        collectedOpenPosition.locations.sort();
      } else {
        collectedOpenPositions.push({
          title: openPosition.title,
          locations: [this.convertLocationName(openPosition.location)]
        });
      }
    });

    return collectedOpenPositions;
  }

  private convertLocationName(locationName: string): string {
    switch (locationName) {
      case 'Metro Detroit':
        return 'Detroit';
      case 'Greater Toronto':
        return 'Toronto';
      default:
        return locationName;
    }
  }

  private collectOpenPositionTriples(collectedOpenPositions: CollectedOpenPosition[]): any[] {
    const result = [];
    let triple = [];
    for (let i = 1; i <= collectedOpenPositions.length; i++) {
        const single = collectedOpenPositions[i - 1];
        single.id = i;
        triple.push(single);
        if (i % 3 === 0) {
            result.push(triple);
            triple = [];
        }
    }
    if (triple.length > 0) {
        result.push(triple);
    }

    return result;
  }
}
