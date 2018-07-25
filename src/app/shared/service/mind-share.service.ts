import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MindShare } from '../model/mind-share';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class MindShareService {
  private url = environment.baseCmsUrl + environment.endpoints.mindShares;

  constructor(private httpClient: HttpClient) {}

  getMindShares(): Observable<MindShare[]> {
    return this.httpClient.get<MindShare[]>(this.url).pipe(
      map(mindShares => {
        mindShares.forEach(mindShare => {
          mindShare.publishDate = new Date(mindShare.publishDate);
        });

        // sorts in ascending order
        mindShares.sort(function(a, b) {
          return b.publishDate.getTime() - a.publishDate.getTime();
        });

        return mindShares;
      })
    );
  }

  getMindShare(id: string): Observable<MindShare> {
    if (environment.usingLocalData) {
      return this.getMindShares().pipe(
        map(mindShares => {
          const result = mindShares.filter(mindShare => mindShare.id === id)[0];
          if (result) {
            result.publishDate = new Date(result.publishDate);
          }
          return result;
        })
      );
    }

    return this.httpClient.get<MindShare>(this.url + '/' + id).pipe(
      map(mindShare => {
        mindShare.publishDate = new Date(mindShare.publishDate);
        return mindShare;
      })
    );
  }

  getFeaturedMindShare(): Observable<MindShare> {
    return this.getMindShares().pipe(
      map(mindShares => {
        return mindShares.filter(mindShare => mindShare.isFeatured)[0];
      })
    );
  }
}
