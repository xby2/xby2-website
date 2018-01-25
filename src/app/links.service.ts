import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Link } from './link';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LinksService {
  private _linksUrl = '../assets/links.json';

  constructor(private _http: Http) { }

  getLinks(): Observable<Link[]> {
    return this._http.get(this._linksUrl)
      .map(response => <Link[]>response.json());
  }
}
