import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Link } from '../model/link';
import { environment } from '../../../environments/environment';

@Injectable()
export class LinksService {
  private url = environment.baseCmsUrl + environment.endpoints.links;

  constructor(private _httpClient: HttpClient) {}

  getLinks(): Observable<Link[]> {
    return this._httpClient.get<Array<Link>>(this.url);
  }
}
