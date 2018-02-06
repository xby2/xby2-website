import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MindShare } from './mind-share';

@Injectable()
export class MindShareService {
  private url = '../assets/mind-shares.json';

  constructor(private httpClient: HttpClient) { }

  getMindShares(): Observable<MindShare[]> {
    return this.httpClient.get<MindShare[]>(this.url);
  }

  getFeaturedMindShare(): Observable<MindShare> {
    return this.getMindShares()
      .map(mindShares =>
           mindShares.filter(mindShare => mindShare.isFeatured)[0]);
  }
}
