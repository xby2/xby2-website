import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Expertise } from './expertise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExpertiseService {
  private url = '../assets/expertises.json';

  constructor(private httpClient: HttpClient) { }

  getExpertises(): Observable<Expertise[]> {
    return this.httpClient.get<Array<Expertise>>(this.url);
  }
}
