import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Link } from '../model/link';

@Injectable()
export class LinksService {
  private _linksUrl = '../assets/data/links.json';

  constructor(private _httpClient: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return this._httpClient.get<Array<Link>>(this._linksUrl);
  }
}
