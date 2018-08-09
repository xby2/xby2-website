import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Xby2Location } from '../../model/xby2-location';
import { environment } from '../../../../environments/environment';

@Injectable()
export class Xby2LocationService {
  readonly url = environment.baseCmsUrl + environment.endpoints.locations;

  constructor(private httpClient: HttpClient) {}

  getXby2Locations(): Observable<Xby2Location[]> {
    return this.httpClient.get<Array<Xby2Location>>(this.url);
  }
}
