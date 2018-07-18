import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MindShare } from '../model/mind-share';
import { environment } from '../../../environments/environment';

@Injectable()
export class MindShareService {
  private url = environment.baseCmsUrl + '/mind-shares';

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
    return this.httpClient.get<MindShare>(this.url + '/' + id).map(mindShare => {
      mindShare.publishDate = new Date(mindShare.publishDate);
      return mindShare;
    });
  }

    getFeaturedMindShare(): Observable<MindShare> {
      return this.getMindShares().map(mindShares => {
        return mindShares.filter(mindShare => mindShare.isFeatured === true)[0];
      });
    }
}
