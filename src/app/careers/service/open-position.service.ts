import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { LeverJobPosting } from '../model/lever-job-posting';
import { OpenPosition } from '../model/open-position';

@Injectable()
export class OpenPositionService {
  private url = 'https://api.lever.co/v0/postings/xby2?mode=json';

  constructor(private httpClient: HttpClient) { }

  getOpenPositions(): Observable<OpenPosition[]> {
    return this.httpClient.get(this.url).map(
      (leverJobPostings: LeverJobPosting[]) => {
        return leverJobPostings.map(leverJobPosting => {
          const openPosition: OpenPosition = {
            title: leverJobPosting.text,
            location: leverJobPosting.categories.location
          };
          return openPosition;
        });
      }
    );
  }
}
