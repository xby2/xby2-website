import { Component, OnInit, Input } from '@angular/core';
import { CollectedOpenPosition } from '../../model/collected-open-position';
import { OpenPosition } from '../../model/open-position';

declare var $: any;

@Component({
  selector: 'app-open-positions-section',
  templateUrl: './open-positions-section.component.html',
  styleUrls: ['./open-positions-section.component.css']
})
export class OpenPositionsSectionComponent implements OnInit {
  @Input() openPositions: OpenPosition[];
  collectedOpenPositions: CollectedOpenPosition[];
  collectedOpenPositionsTriples: any[];

  constructor() { }

  ngOnInit() {
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

  private collectOpenPositions(openPositions: OpenPosition[]) {
    const collectedOpenPositions: CollectedOpenPosition[] = [];

    openPositions.forEach(openPosition => {
      const collectedOpenPosition: CollectedOpenPosition =
        collectedOpenPositions.filter(c => c.title === openPosition.title)[0];

      if (collectedOpenPosition) {
        collectedOpenPosition
                  .listings
                  .push({
                    id: openPosition.id,
                    location: this.convertLocationName(openPosition.location)
                  });
        collectedOpenPosition.listings.sort(function(a, b) {
          const x = a.location.toLowerCase();
          const y = b.location.toLowerCase();
          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0;
        });

      } else {
        collectedOpenPositions.push({
          title: openPosition.title,
          listings: [{
            id: openPosition.id,
            location: this.convertLocationName(openPosition.location)
          }]
        });
      }
    });

    return collectedOpenPositions;
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
}
