import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { LeverJobPosting } from '../model/lever-job-posting';
import { OpenPosition } from '../model/open-position';

@Injectable()
export class OpenPositionService {
  private url = 'https://api.lever.co/v0/postings/xby2';

  constructor(private httpClient: HttpClient) { }

  getOpenPositions(): Observable<OpenPosition[]> {
    return this.httpClient.get(this.url + '?mode=json').map(
      (leverJobPostings: LeverJobPosting[]) => {
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
      }
    );
  }

  getOpenPosition(id: string): Observable<OpenPosition> {
    return this.httpClient.get(this.url + '/' + id + '?mode=json').map(
      (leverJobPosting: LeverJobPosting) => {
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
      }
    );
  }
}
