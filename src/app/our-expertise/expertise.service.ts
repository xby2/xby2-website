import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Expertise } from './expertise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExpertiseService {
  private _expertisesUrl = '../assets/expertises.json';

  constructor(private _httpClient: HttpClient) { }

  getExpertises(): Observable<Expertise[]> {
    return this._httpClient.get<Array<Expertise>>(this._expertisesUrl);
  }
}
