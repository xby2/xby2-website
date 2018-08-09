import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Industry } from '../model/industry';
import { environment } from '../../../environments/environment';

@Injectable()
export class IndustryService {
  private url = environment.baseCmsUrl + environment.endpoints.industries;

  constructor(private _httpClient: HttpClient) {}

  getIndustries(): Observable<Industry[]> {
    return this._httpClient.get<Array<Industry>>(this.url);
  }
}
