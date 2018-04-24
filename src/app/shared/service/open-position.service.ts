import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { OpenPosition } from '../model/open-position';
import { LeverJobPosting } from '../model/lever-job-posting';
import { CollectedOpenPosition } from '../model/collected-open-position';

@Injectable()
export class OpenPositionService {
  private url = 'https://api.lever.co/v0/postings/xby2';

  constructor(private httpClient: HttpClient) {}

  getOpenPositions(): Observable<OpenPosition[]> {
    return this.httpClient
      .get(this.url + '?mode=json')
      .map((leverJobPostings: LeverJobPosting[]) => {
        return leverJobPostings.map(leverJobPosting => {
          const openPosition: OpenPosition = {
            id: leverJobPosting.id,
            title: leverJobPosting.text,
            location: leverJobPosting.categories.location,
            team: leverJobPosting.categories.team,
            commitment: leverJobPosting.categories.commitment,
            description: leverJobPosting.description,
            sections: leverJobPosting.lists,
            applyUrl: leverJobPosting.applyUrl
          };

          return openPosition;
        });
      });
  }

  getOpenPosition(id: string): Observable<OpenPosition> {
    return this.httpClient
      .get(this.url + '/' + id + '?mode=json')
      .map((leverJobPosting: LeverJobPosting) => {
        const openPosition: OpenPosition = {
          id: leverJobPosting.id,
          title: leverJobPosting.text,
          location: leverJobPosting.categories.location,
          team: leverJobPosting.categories.team,
          commitment: leverJobPosting.categories.commitment,
          description: leverJobPosting.description,
          sections: leverJobPosting.lists,
          applyUrl: leverJobPosting.applyUrl
        };

        return openPosition;
      });
  }

  collectOpenPositions(openPositions: OpenPosition[]) {
    const collectedOpenPositions: CollectedOpenPosition[] = [];

    openPositions.forEach(openPosition => {
      const collectedOpenPosition: CollectedOpenPosition = collectedOpenPositions.filter(
        c => c.title === openPosition.title
      )[0];

      if (collectedOpenPosition) {
        collectedOpenPosition.listings.push({
          id: openPosition.id,
          location: this.convertLocationName(openPosition.location)
        });
        collectedOpenPosition.listings.sort(function(a, b) {
          const x = a.location.toLowerCase();
          const y = b.location.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      } else {
        collectedOpenPositions.push({
          title: openPosition.title,
          listings: [
            {
              id: openPosition.id,
              location: this.convertLocationName(openPosition.location)
            }
          ]
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
}
