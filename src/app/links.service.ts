import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Link } from './link';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LinksService {
  private _linksUrl = '../assets/links.json';

  constructor(private _httpClient: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return this._httpClient.get<Array<Link>>(this._linksUrl);
  }
}
