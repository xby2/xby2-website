import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Xby2Location } from '../../model/xby2-location';

@Injectable()
export class Xby2LocationService {
  readonly url = '../assets/data/xby2-locations.json';

  constructor(private httpClient: HttpClient) { }

  getXby2Locations(): Observable<Xby2Location[]> {
    return this.httpClient.get<Array<Xby2Location>>(this.url);
  }
}
