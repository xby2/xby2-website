import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MindShare } from '../model/mind-share';
@Injectable()
export class MindShareService {
  private url = '../assets/data/mind-shares.json';

  constructor(private httpClient: HttpClient) {}

  getMindShares(): Observable<MindShare[]> {
    return this.httpClient.get<MindShare[]>(this.url).map(mindShares => {
      mindShares.forEach(mindShare => {
        mindShare.publishDate = new Date(mindShare.publishDate);
      });

      // sorts in ascending order
      mindShares.sort(function(a, b) {
        return b.publishDate.getTime() - a.publishDate.getTime();
      });

      return mindShares;
    });
  }

  getMindShare(id: string): Observable<MindShare> {
    return this.getMindShares().map(mindShares => {
      const result = mindShares.filter(mindShare => mindShare.id === id)[0];
      if (result) {
        result.publishDate = new Date(result.publishDate);
      }
      return result;
    });
  }
}
