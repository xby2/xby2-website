import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RecruitingValue } from '../model/recruiting-value';
import { environment } from '../../../environments/environment';

@Injectable()
export class RecruitingValueService {
  private url = environment.baseCmsUrl + environment.endpoints.recruitingValues;

  constructor(private httpClient: HttpClient) {}

  getCompanyValues(): Observable<RecruitingValue[]> {
    return this.httpClient.get<Array<RecruitingValue>>(this.url);
  }
}
