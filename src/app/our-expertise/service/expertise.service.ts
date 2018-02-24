import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Expertise } from '../model/expertise';

@Injectable()
export class ExpertiseService {
  private url = '../assets/data/expertises.json';

  constructor(private httpClient: HttpClient) { }

  getExpertises(): Observable<Expertise[]> {
    return this.httpClient.get<Array<Expertise>>(this.url);
  }
}
